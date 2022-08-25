import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import auth from './../../../firebase.init';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth); 

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    <div>
      <div class="hero min-h-screen bg-base-400">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left w-1/2">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" value={email} placeholder="email" class="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="text" value={password} placeholder="password" class="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button onClick={() => signInWithEmailAndPassword(email, password)} class="btn btn-primary mb-4">Login</button>
              </div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-secondary bg-red-400 border-0 rounded p-2 my-4 mt-0 text-white"
              >
                Sign In With Google
              </button>
              <button className="btn btn-accent border-0 rounded p-2 mb-4 mt-0 text-white">
                Sign In With Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
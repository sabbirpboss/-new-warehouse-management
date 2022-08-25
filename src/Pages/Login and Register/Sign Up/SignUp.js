import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "./../../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="bg-base-300 flex justify-center items-center text-4xl font-bold w-screen h-screen">
        <p className="mt-[-15%] text-white">Loading...</p>
      </div>
    );
  }
  if (user) {
    toast.success("Registered Successfully!");
  }
  // console.log(user);

  return (
    <div>
      <div class="hero min-h-screen bg-base-400">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left w-1/2">
            <h1 class="text-5xl font-bold">Signup now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  placeholder="Your Name"
                  class="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="email"
                  class="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  placeholder="password"
                  class="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control my-6">
                <button
                  class="btn btn-primary text-white"
                  onClick={() =>
                    createUserWithEmailAndPassword(email, password, email)
                  }
                >
                  Signup
                </button>
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

export default SignUp;

import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const logout = () => {
        signOut(auth);
        if(signOut){
            alert('You have been signed out');
        }
    }

    const logo = <>
        <h2 className='text-xl font-bold font-mono text-white'>SpringStock</h2>
    </>
    const menuItems = <>
        <li><Link to="/manage">Manage</Link></li>
        {/* <li><Link to="/">Add Item</Link></li>
        <li><Link to="/">My Items</Link></li> */}
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <div className='flex items-center'>
            <li className='bg-base-200 text-white rounded ml-4'><Link to="/how">How it works</Link></li>
            <li className='bg-red-500 text-white rounded ml-4'><Link to="/buy">Buy Now</Link></li>
        </div>
    </>;

    const userLogin = <>
        {
            user ? <> 
            <div className='flex items-center gap-2 justify-center'>
                <img className='w-10 border border-cyan-400 p-[1px] rounded-full' src={user.photoURL} alt={user.displayName} />
                <h2 className='font-bold'>{user.displayName}</h2>
            </div>
            <button className="btn btn-primary ml-2" onClick={logout}>
            SignOut
        </button> </>
                :
                <>
                    <ul className='flex flex-row-reverse gap-2' style={{ textDecoration: 'none' }}>
                        <li className="btn btn-primary"><Link to="/signup">SignUp</Link></li><li className="btn btn-primary"><Link to="/login">Login</Link></li>
                    </ul>
                </>
        }
    </>
    return (
        <div className=' bg-neutral text-neutral-content'>
            <h1></h1>
            <div class="navbar container mx-auto">
                <div class="navbar-center">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className='lg:mr-24' to='/'>{logo}</Link>
                </div>
                <div class="navbar hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end">
                    {userLogin}
                </div>
            </div>
        </div>
    );
};

export default Header;
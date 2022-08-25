import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const logo = <>
        <h2 className='text-xl font-bold font-mono text-white'>Spring Stock</h2>
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
        <div class="avatar mr-4">
            <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="user.jpg" alt='user' />
            </div>
        </div>
        <ul className='flex flex-col-reverse' style={{textDecoration: 'none'}}><li><Link to="/signup">SignUp</Link></li><li><Link to="/login">Login</Link></li></ul>
    </>

    return (
        <div className=' bg-neutral text-neutral-content'>
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
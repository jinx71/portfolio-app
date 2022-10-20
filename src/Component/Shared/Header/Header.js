import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                        <li><Link className='mb-5 btn btn-primary text-white' to="/">Home</Link></li>
                        <li><Link className='mb-5 btn btn-primary text-white' to="/">Projects</Link></li>
                        <li><Link className='mb-5 btn btn-primary text-white' to="/">Skills</Link></li>
                        <li><Link className=' btn btn-primary text-white' to="/">Blogs</Link></li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Sazed Karim</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='mr-5 btn btn-primary text-white' to="/">Home</Link></li>
                    <li><Link className='mr-5 btn btn-primary text-white' to="/">Projects</Link></li>
                    <li><Link className='mr-5 btn btn-primary text-white' to="/">Skills</Link></li>
                    <li><Link className='mr-5 btn btn-primary text-white' to="/">Blogs</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn" to="/">Contact Me</Link>
            </div>
        </div>
    );
};

export default Header;
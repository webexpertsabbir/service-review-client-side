import React from 'react';
import { Link } from 'react-router-dom';
import  Logo from '../../images/logo-dark.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 lg:px-28">
            <div className="flex-1">
                <Link to='/' className="w-36"><img src={Logo} alt="" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <Link to='/' className='mr-3'>Home</Link>
                    <Link to='/blog' className='mr-3'>Blog</Link>
                    <Link to='/service' className='mr-3'>Service</Link>
                    <Link to='/login' className='mr-3'>Log In</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
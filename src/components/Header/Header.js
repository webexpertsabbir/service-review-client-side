import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Logo from '../../images/logo-dark.png'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
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

                    {
                        user?.uid ?
                            <>
                                <span className='text-yellow-500'> {user?.displayName}</span>
                                <button className='btn btn-sm btn-warning mx-3' onClick={handelLogOut}>Log Out</button>

                            </>
                            :
                            <>
                                <Link to='/login' className='mr-3'>Log In</Link>
                                <Link to='/signup' className='mr-3'>Sign Up</Link>
                            </>

                    }
                    <FaUser></FaUser>
                </ul>
            </div>
        </div>
    );
};

export default Header;
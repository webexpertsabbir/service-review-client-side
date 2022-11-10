import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const LogIn = () => {
    useTitle('Log In')

    const { signIn, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.log(error))

    }

    const googleProvider = new GoogleAuthProvider()

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (


        <div>
            <div className="hero min-h-screen bg-base-200 lg:px-28">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                        <h1 className="text-5xl font-bold px-20 pt-5">Please Login!</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/signup' className="label-text-alt link link-hover">Please Register?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Login</button>
                                </div>

                                <h2 className='text-center'>or</h2>
                                <hr />
                                <button className='btn' onClick={handelGoogleSignIn}> <FaGoogle className='mr-3 text-lg'></FaGoogle> Google</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
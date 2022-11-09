import React from 'react';
import { FaGoogle } from "react-icons/fa";
const LogIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:px-28">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        
                            <h1 className="text-5xl font-bold px-20 pt-5">Please Login!</h1>
                        
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Please Register?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <h2 className='text-center'>or</h2>
                            <hr />
                            <button className='btn'> <FaGoogle className='mr-3 text-lg'></FaGoogle> Google</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
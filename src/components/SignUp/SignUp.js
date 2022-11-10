import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                handleUpdateUserProfile(name);
            })
            .catch(err => console.error(err));         
    }

    
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:px-28">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                        <h1 className="text-5xl font-bold px-20 pt-5">Please Register!</h1>

                        <form onSubmit={handelSignUp}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
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
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Please Login? </Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Register</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../../images/patrick-dozkvhdyvhq-unsplash.webp';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/originals/7a/e2/02/7ae2021a0d96046fbc6e8070b9019bf7.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-4xl grid banner-test">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold">Professional <br /> Wedco Photography</h1>
                        <p className="mb-5 text-xl">The argument in favor of using filler text this your goes something like this. <br /> review point you’ll end up reviewing lorem and negotiating.</p>
                        <Link to='/services'>
                            <button className="btn btn-outline btn-warning px-7">Service</button>
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
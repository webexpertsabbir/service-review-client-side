import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-dark.png';
import gallary from '../../images/Screenshot_4.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content text-lg">
            <div>
            <Link to='/' className="w-36"><img src={Logo} alt="" /></Link>
                <p>We’ve delivered fabulous <br /> wedding event experiences over <br /> the last two decades and are now <br /> poised to chart out a whole new <br /> growth story.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Instagram Gallery</span>
                <img src={gallary} alt="" />
            </div>
        </footer>
        <hr />
        <p className='text-center py-3 text-lg'>Copyright © 2020. All rights reserved</p>
        </div>
    );
};

export default Footer;
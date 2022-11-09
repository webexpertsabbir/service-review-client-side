import React from 'react';
import Banner from '../components/Banner/Banner';
import singelImage from '../images/single-img11.jpg';
import { FaBuromobelexperte } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="hero min-h-screen bg-base-200 lg:px-28">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={singelImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-12'>
                        <h1 className="text-5xl font-bold">The Best Wedding Photography Studio In Town</h1>
                        <p className="py-6">The argument in favor of using filler text this your goes something like this review point you’ll end up reviewing lorem and negotiating the content itself and not the favor of design by injected rando mised words which don’t look even slightly believable. He take care of about this all.</p>
                        <div className='grid grid-cols-2'>
                            <div className='flex justify-start'>
                                <div className='text-5xl text-warning'>
                                    <FaBuromobelexperte></FaBuromobelexperte>
                                </div>
                                <div className='ml-2'>
                                    <h2 className='text-2xl font-semibold'>Certified Studio</h2>
                                    <p>Quickly productivate just in time strategic theme.</p>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <div className='text-5xl text-warning'>
                                    <FaAward></FaAward>
                                </div>
                                <div className='ml-2'>
                                    <h2 className='text-2xl font-semibold'>Award Ceremony</h2>
                                    <p>We are always be on time and ready to give you the.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
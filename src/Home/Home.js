import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import singelImage from '../images/single-img11.jpg';
import { FaBuromobelexperte } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';
import LimitServices from '../components/LimitServices/LimitServices';
import { Link } from 'react-router-dom';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

            .catch(error => console.log(error))


    }, [])




    return (
        <div>
            <Banner></Banner>

            <div className="hero min-h-screen bg-base-200 lg:px-28 py-14">
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


            <div className='lg:px-28  pb-24'>
                <h1 className="text-5xl font-bold pb-12">Services</h1>
                <div className='grid md:grid-cols-3  gap-5 '>
                    {
                        services.map(service => <LimitServices
                            key={service._id}
                            service={service}
                        ></LimitServices>)
                    }
                </div>
                <Link to='/service'>
                    <button className="btn btn-warning my-5">Se All</button>
                </Link>
            </div>

            <div className='lg:px-28'>
                <div>
                    <div>
                        <h1 className="text-5xl font-bold pb-12">Photography Work Examples</h1>
                    </div>
                </div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/10/best-wedding-hair-half-up-twist-min.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://pbs.twimg.com/media/EDrmUfQUUAEESMi.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://advancedfamilydentistryoffairbanks.com/wp-content/uploads/2018/04/wedding-1c.jpg" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://glamours.name/uploads/posts/2022-02/1645115247_1-glamours-name-p-svadebnii-rolik-krasivo-foto-1.jpg" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
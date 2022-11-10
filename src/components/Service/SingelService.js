import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingelService = () => {
    const { _id, img, price, title, description } = useLoaderData();

    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl lg:px-28">
                <h2 className="card-title py-5 text-4xl font-bold">{title}</h2>
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">

                    <p className='text-xl'>{description}</p>
                    <div className=' py-5'>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelService;
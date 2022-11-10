import React from 'react';
import { Link } from 'react-router-dom';

const LimitServices = ({ service }) => {
    const { _id, img, price, title, description } = service;


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(1, 100)} ...</p>
                <div className='flex content-betwien py-5'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-warning btn-sm">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitServices;
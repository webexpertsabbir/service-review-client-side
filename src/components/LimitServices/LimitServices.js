import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const LimitServices = ({ service }) => {
    const { _id, img, price, title, description } = service;


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
             <figure>
                <PhotoProvider>
                    <div className="foo">

                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>

                    </div>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(1, 100)} ...</p>
                <div className='flex content-betwien py-5'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-warning btn-sm">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitServices;
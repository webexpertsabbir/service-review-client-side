import React from 'react';
import { useLoaderData } from 'react-router-dom';

import useTitle from '../../hooks/useTitle';

const SingelService = () => {
    const { _id, img, price, title, description } = useLoaderData();
 
    useTitle(title);

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

            <div className='px-24 py-5'>



                <div className="card flex-shrink-0 w-full bg-base-100">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" name="image" id="gfgfg" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea name="Review" id="" cols="30" rows="10" className="input input-bordered" placeholder='review'></textarea>
                    </div>
                   
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Review</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default SingelService;
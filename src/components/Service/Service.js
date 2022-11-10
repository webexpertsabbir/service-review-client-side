import React, { useEffect, useState } from 'react';
import CardService from './CardService';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

            .catch(error => console.log(error))


    }, [])
    return (
        <div>
             <div className='lg:px-28  py-16'>
                {/* <h1 className="text-5xl font-bold pb-12">Services</h1> */}
                <div className='grid md:grid-cols-3  gap-5 '>
                    {
                        services.map(service => <CardService
                            key={service._id}
                            service={service}
                        ></CardService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;
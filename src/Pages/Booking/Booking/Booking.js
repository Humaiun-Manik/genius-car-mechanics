import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://pacific-bayou-95387.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className='text-center'>
            <h2>Details of: {service.name}</h2>
            <h2>This is Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service}=props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="p-3 text-center">
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
                <p>{description}</p>
                <Link to={`/booking/${_id}`}>
                    <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service; <h2>This is Service</h2>
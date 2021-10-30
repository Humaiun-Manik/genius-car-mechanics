import React from 'react';
import { Link } from 'react-router-dom';
import notfoud from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfoud} alt="" />
            <Link to='/'>
                <button style={{ alignItems: 'center' }}>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;
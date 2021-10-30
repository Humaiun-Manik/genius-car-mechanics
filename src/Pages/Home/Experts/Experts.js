import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.png'
import mechanic2 from '../../../images/mechanic/mechanic-2.png'
import mechanic3 from '../../../images/mechanic/mechanic-3.png'
import mechanic4 from '../../../images/mechanic/mechanic-4.png'

import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        id: 2,
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        id: 3,
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        id: 4,
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className="text-primary text-center">Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;
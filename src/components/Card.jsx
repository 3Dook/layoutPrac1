import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {

    const handleImageError = e => {
        e.preventDefault();
        console.log('Blah')

    }

    // Either put it in public or require it in asssests.

    return (
        <div className='flex flex-col aspect-square bg-gray-300 mt-8 drop-shadlow-lg border-solid border-[#585858] rounded-md hover:scale-[1.15] ease-in-out duration-300'>
            <img src={props.img} alt='none'
            className='flex-1'
            />
            <h1
            className='self-center font-black text-3xl'
            >TITLE</h1>
            <p
            className='font-medium text-2xl'
            >Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestiae.</p>
        </div>
        
    );
};



export default Card;
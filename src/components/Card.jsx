import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {

    const handleImageError = e => {
        e.preventDefault();
        console.log('Blah')

    }

    // Either put it in public or require it in asssests.

    return (
        <div className='flex flex-col aspect-square bg-gray-300 mt-8 mx-8 drop-shadlow-lg border-solid border-[#585858] rounded-md hover:scale-[1.15] ease-in-out duration-300
        md:w-[calc(45%-2.5em)]
        lg:w-[25%]
        '>
            <img src={props.img} alt='none'
            className='flex-1 w-full object-cover
            lg:h-[27%]
            '
            />
            <div className=''>
                <h1
                className='self-center font-black text-2xl'
                >TITLE</h1>
                <p
                className='font-medium text-1xl'
                >Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestiae.</p>
            </div>
        </div>
        
    );
};



export default Card;
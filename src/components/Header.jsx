import React from 'react';
import PropTypes from 'prop-types';
import {SlGhost} from 'react-icons/sl'
const Header = props => {
    return (
        <div className='w-[80%] self-center pt-12'>
            <div className='flex items-center'>
                <div className=''>
                    <SlGhost size={40} />
                </div>
                <h1 className='pl-8 font-bold self-end tracking-[0.35em]'>GHOST</h1>
            </div>
        </div>
    );
};



export default Header;
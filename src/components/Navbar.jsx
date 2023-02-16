import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineClose} from 'react-icons/ai';
const Navbar = props => {

    const [showNav, setShowNav] = useState(false)

    const handleToggleShowNav = () =>{
        setShowNav(!showNav);
    }

    return (
        <div className='flex'>
            <div className='fixed right-0 pt-8 pr-8' onClick={handleToggleShowNav}>
                <RxHamburgerMenu size="40"/>
            </div>

            <div className= {'flex fixed w-[22em] max-w-[85%] h-full right-0 ease-in-out duration-500 text-white ' + (showNav ? 'translate-x-0' : 'translate-x-full')}>
                {/* below is a tailwind css trick to spin the svg icon upon open and closing */}
                <div className='h-[60px] aspect-square pt-4' onClick={handleToggleShowNav}>
                    <div className={showNav ? '' : 'rotate-[360deg] ease-in-out duration-500 text-[#585858]  '}>
                        <div className={showNav ? 'rotate-[360deg] ease-in-out duration-500 text-[#585858] ' : ''}>
                        <AiOutlineClose size="40"/>
                        </div>
                    </div>
                </div>
                <div className=' z-10 bg-[#585858] drop-shadlow-lg w-full h-full px-8 py-8'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-bond mr-4 sm:text-4xl'>
                            MENU 
                        </h1>
                        <ul className='w-full h-[60vh] pr-8 flex flex-col leading-loose
                        [&>li]:py-4 
                        [&>li]:pt-4 
                        '>
                                <li className='border-b-2 border-[#ffffff] w-10/12'>Home</li>
                                <li className='border-b-2 border-[#ffffff] w-10/12'>About</li>
                                <li className='border-b-2 border-[#ffffff] w-10/12'>SignUp/LogOut</li>
                                <li className=''><a href='#contactMe'>Contact</a></li>
                                
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;
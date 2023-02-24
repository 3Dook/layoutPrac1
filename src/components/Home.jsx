import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer';

const Home = props => {
    return (
        <div className='self-center justify-center flex pt-4'>
            <div className='w-[80%] self-center flex flex-col'>
                <header className='self-center'>
                    <h1
                    className='font-bold text-3xl'
                    >This is Ghost, A Fake practice site to make sure i understand tailwind and css fundatmentals</h1>
                    <p className='pt-8'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem corporis quod minus omnis consequuntur dolorum, eligendi soluta, dolore ipsum atque ducimus qui, numquam sapiente saepe accusantium amet dolorem nobis ut.
                    </p>
                </header>
                <div className='self-center justify-center flex pt-4'>
                    <CardContainer />
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;
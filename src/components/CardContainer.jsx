import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardContainer = props => {
    return (
        <div className='w-[80%]'>
            <Card img="duck1.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck1.jpg" />            
        </div>
    );
};


export default CardContainer;
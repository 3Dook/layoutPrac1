import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardContainer = props => {
    return (
        <div className='w-full flex flex-wrap justify-center'>
            <Card img="duck1.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck3.jpg" />            
            <Card img="duck1.jpg" />            
            <Card img="duck3.jpg" />            
        </div>
    );
};


export default CardContainer;
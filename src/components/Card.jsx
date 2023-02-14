import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {

        try {
            const test = {
                img: require("../assests/downloa3d.jpg"),
            }
        } catch (err){
            const test = {
                img: '../assests.download.jpg'
        }

    const handleImageError = e => {
        e.preventDefault();
        console.log('Blah')

    }
    return (
        <div>
            <img src={test.img} alt='none'
            onError={(event) => event.target.removeAttribute('src')}
            />
            <div>Demograpggy</div>
        </div>
        
    );
};

}

export default Card;
import React from 'react';
import './card.css';

const Card = ({ imageUrl, title, description, price }) => {
    return (
        <div className="card">
            <img src={`https://${imageUrl}`} alt={title} className="card-img" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className='info-card'>
                <h2 className='price'>$ {price}</h2>
                <button>Buy Now</button>
                </div> 
            </div>
        </div>
    );
};

export default Card;
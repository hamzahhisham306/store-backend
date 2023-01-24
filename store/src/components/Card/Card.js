import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { increase,setOrders } from '../../store/cart';
import { Link } from 'react-router-dom';
const Card = ({ imageUrl, title, description, price, id }) => {
    const dispatch = useDispatch();
    const handlerBuy = (name, salary, imageUrl) => {
        dispatch(increase());
        dispatch(setOrders({name:name, salary:salary, imageUrl:imageUrl}));
    }
    return (
        <div className="card" >
            <Link to={`/single/${id}`}><img src={`https://${imageUrl}`} alt={title} className="card-img" /></Link>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className='info-card'>
                    <h2 className='price'>$ {price}</h2>
                    <button onClick={()=>handlerBuy(title, price, imageUrl)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
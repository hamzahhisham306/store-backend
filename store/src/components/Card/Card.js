import React from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import {increase } from '../../store/cart';
// import axios from 'axios';
import { Link } from 'react-router-dom';
const Card = ({ imageUrl, title, description, price, id }) => {
    const dispatch = useDispatch();
    // const state=useSelector(statesingle);

    // const getInfo = async (id) => {
    //     try {
    //        await axios.get(`http://localhost:4000/product/${id}`).then(res=>{
    //         // dispatch(setSingle(res.data));
    //         console.log(res.data)
    //        }).catch(err=>console.log(err));
    //     } catch (error) {
    //         console.log(error);
    //     };
    // };
    // console.log(state);
    return (
     <div className="card" >
        <Link to={`/single/${id}`}><img src={`https://${imageUrl}`} alt={title} className="card-img" /></Link> 
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className='info-card'>
                    <h2 className='price'>$ {price}</h2>
                    <button onClick={()=>dispatch(increase())}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
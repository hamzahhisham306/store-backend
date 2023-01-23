import React from 'react'
import './single.css';
// import { useSelector } from 'react-redux';
// import { statesingle } from '../../store/single';
import Nav from '../Login/Navbar/Nav';
function Single() {
    // const state = useSelector(statesingle);
    // console.log('stata>>>>>>>', state)
    return (
        <>
        <Nav/>
        <h1>sdfdf</h1>
        {/* <div className="card">
            <img src={`https://${state?.imgUrl}`} alt='alt' className="card-img" />
            <div className="card-content">
                <h2 className="card-title">{state?.brandName}</h2>
                <p className="card-description">{state?.description}</p>
                <div className='info-card'>
                    <h2 className='price'>$ {state?.price}</h2>
                    <button>Buy Now</button>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Single
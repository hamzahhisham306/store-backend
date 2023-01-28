import React from 'react'
import './modal.css';
import { setHiddenForm, stateAuth } from '../../store/auth';
import { statecart } from '../../store/cart';
import { setEmptyArray } from '../../store/cart'
import cookies from 'react-cookies';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
function Modal() {
    const dispatch = useDispatch();
    const stateShow = useSelector(stateAuth);
    const arrayOrders = useSelector(statecart);
    const totalPrice = arrayOrders.cartOrders.length !== 0 ? arrayOrders.cartOrders?.map((item) => item.salary * item.nums).reduce((a, b) => a + b) : 0;
    console.log(arrayOrders);
    const handlerSubmit = async (e) => {
        e.preventDefault();
        const order = {
            UserId: cookies.load('userId'),
            prdunctId: arrayOrders.cartOrders?.map((item) => item.id),
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            totalPrice: totalPrice
        };
        e.target.reset();
        dispatch(setEmptyArray());
        dispatch(setHiddenForm())
        await axios.post('http://localhost:4000/order', order).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err));
    }

    return (
        <div>
            {stateShow.showForm && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='shopping-cart'>
                            <h2>Your Shooping Order</h2>
                            <form onSubmit={handlerSubmit}>
                                <label>name </label>
                                <input type='text' id='name' required />
                                <label>email</label>
                                <input type='email' required id='email' />
                                <label>address</label>
                                <input type='text' required id='address' />
                                <label>Phone </label>
                                <input type='text' required id='phone' />
                                <label>Total Price</label>
                                <input type='text' required disabled defaultValue={'$ ' + totalPrice} /><br></br>
                                <button type='submit' className='confirm'>Confirm</button>
                            </form>
                        </div>
                        <button onClick={() => dispatch(setHiddenForm())} className='modal-close'>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
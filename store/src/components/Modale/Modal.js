import React from 'react'
import './modal.css';
import { setClose, stateAuth } from '../../store/auth';
import { statecart } from '../../store/cart';
import { increase, setOrders } from '../../store/cart';

import { useSelector, useDispatch } from 'react-redux'
function Modal() {
    const dispatch = useDispatch();
    const stateShow = useSelector(stateAuth);
    const arrayOrders = useSelector(statecart);
    const handlerBuy = (name, salary, imageUrl) => {
        dispatch(increase());
        dispatch(setOrders({ name: name, salary: salary, imageUrl: imageUrl }));
    }
    return (
        <div>
            {stateShow.showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='shopping-cart'>
                            <h2>Your Shooping Cart</h2>
                            <table>
                                <thead>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>number</th>
                                    <th>Add more</th>
                                </thead>
                                {arrayOrders && arrayOrders.cartOrders.map((item, index) => {
                                    return (
                                        <tbody>

                                            <td><img src={`https://${item.imageUrl}`} width='130' height='120' alt='pho' /></td>
                                            <td>{item.name}</td>
                                            <td>$ {item.salary}</td>
                                            <td>{item.nums}</td>
                                            <td><button className='plus' onClick={() => handlerBuy(item.name, item.salary)}>+</button></td>
                                        </tbody>

                                    )
                                })}
                                </table>
                                <h3>Total price = $ {arrayOrders&&arrayOrders.cartOrders.map((item)=>{
                                    return item.salary*item.nums;
                                }).reduce((a,b)=>a+b)}</h3>
                        </div>
                        <button onClick={() => dispatch(setClose())} className='modal-close'>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
import React from 'react'
import './modal.css';
import { setClose, stateAuth } from '../../store/auth';
import { statecart } from '../../store/cart';
import { useSelector, useDispatch } from 'react-redux'
function Modal() {
    const dispatch = useDispatch();
    const stateShow = useSelector(stateAuth);
    const arrayOrders= useSelector(statecart);
    return (
        <div>
            {stateShow.showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div>
                        {arrayOrders&&arrayOrders.cartOrders.map((item, index)=>{
                            return (
                                <li key={index}>{item.name} X {item.nums} <span>{item.salary}</span></li>
                            )
                        })}
                        </div>
                        <button onClick={() => dispatch(setClose())} className='modal-close'>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
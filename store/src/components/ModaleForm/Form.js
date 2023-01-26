import React from 'react'
import './modal.css';
import { setHiddenForm, stateAuth } from '../../store/auth';
import { statecart } from '../../store/cart';
import { increase, setOrders , increaseOrder, decrease} from '../../store/cart';

import { useSelector, useDispatch } from 'react-redux'
function Modal() {
    const dispatch = useDispatch();
    const stateShow = useSelector(stateAuth);
    const handlerBuy = (name, salary, imageUrl) => {
        dispatch(increase());
        dispatch(setOrders({ name: name, salary: salary, imageUrl: imageUrl }));
    }
    const handlerCart=(item)=>{
        dispatch(decrease());
        dispatch(increaseOrder({name:item.name}))
    }

    return (
        <div>
            {stateShow.showForm && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='shopping-cart'>
                            <h2>Your Shooping Order</h2>
                            <form>
                             <label>name</label>
                             <input type='text' required/><br></br>
                             <label>email</label>
                             <input type='email' required/><br></br>
                             <label>address</label>
                             <input type='text' required/><br></br>
                             <label>Phone </label>
                             <input type='text' required/><br></br>
                             <label>Total Price</label>
                             <input type='text' required/>

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
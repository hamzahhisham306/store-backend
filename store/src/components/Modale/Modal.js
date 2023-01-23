import React from 'react'
import './modal.css';
import {setClose, stateAuth} from '../../store/auth';
import {useSelector, useDispatch} from 'react-redux'
function Modal() {
    const dispatch=useDispatch();
    const stateShow=useSelector(stateAuth);
    return (
        <div>
            {stateShow.showModal&&(
                <div className='modal'>
                 <div className='modal-content'>
                 <div>
                    Modal Content goes here
                 </div>
                 <button onClick={()=>dispatch(setClose())} className='modal-close'>Close</button>
                 </div>
                </div>
            )}
        </div>
    )
}

export default Modal
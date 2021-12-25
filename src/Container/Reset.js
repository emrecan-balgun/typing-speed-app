import React from 'react'
import { useDispatch } from 'react-redux';
import { resetSeconds } from '../app/typingSlice';

function Reset() {
    const dispatch = useDispatch();

    return (
        <div className="reset">
            <button id="reset" onClick={() => dispatch(resetSeconds())}>Reset</button>
        </div>
    )
}

export default Reset

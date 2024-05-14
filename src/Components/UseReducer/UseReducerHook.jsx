import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducerHook = () => {
    const[state, dispatch]=useReducer(ReducerAction ,0)
    return (
        <div>
            <div className='container'>
            <>
            <input type='text' value={state} />
            </>
            <br />
            <br />
            <button className='add' onClick={()=>{dispatch({type:"Add", payload:1})}}>Add</button>
            <button className='sub' onClick={()=>{dispatch({type:"Sub",payload:1})}}>Sub</button>
            <br />
            <button className='add' onClick={()=>{dispatch({type:"Add", payload:10})}}>Add by 10</button>
            <button className='sub' onClick={()=>{dispatch({type:"Sub",payload:5})}}>Sub by 10</button>
            </div>
        </div>
    );
};

export default UseReducerHook;
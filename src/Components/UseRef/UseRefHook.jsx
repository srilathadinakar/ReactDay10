import React, { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
    const[data,setData]=useState('')
    const myref = useRef();
    const myref1 = useRef()

    useEffect(()=>{
        myref.current.focus();
    },[])

    const handlesubmit = ()=>{
        console.log(myref.current.value);
        myref1.current = myref.current.value;
        setData(data=>data+1)
    }
    
    return (
        <div>
            <h1>Using Useref Hook</h1>
            <input type='text' placeholder='Enter Your Name' ref={myref} />
            <input type='text' placeholder='Enter Your Name' />
            <button onClick={handlesubmit}>Click</button>             
            {myref1.current}
        </div>
    );
};

export default UseRefHook;
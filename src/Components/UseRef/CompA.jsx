import React, { useState } from 'react';

const CompA = () => {
    const [data,setData]=useState('')
    const handlechange =(e)=>{
        setData(e.target.value)
    }
    return (
        <div>
            <h1>component without useref</h1>
            <input type='text' value={data} onChange={handlechange} />
            {data}
        </div>
    );
};

export default CompA;
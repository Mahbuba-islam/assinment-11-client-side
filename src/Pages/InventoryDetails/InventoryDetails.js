import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { Id } = useParams();
    const [inventory , setInvntory] = useState({})

    useEffect( ()=>{
        const url = `http://localhost:4000/inventoryItem/${Id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setInvntory(data))
    }, [])
    
    return (
        <div>
            <h2>Welcome to detail: {Id}</h2>
            <h2>{inventory.name}</h2>
            <p>Price: {inventory.price}</p>
            <p><small>{inventory.description}</small></p>
           
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Delivered</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;
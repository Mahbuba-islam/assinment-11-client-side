import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

import './InventoryItems.css';

const InventoryItems = () => {

    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:4000/inventoryItem')
        .then(res => res.json())
        .then(data => setInventoryItems(data));
    }, [])
   
    return (
        <div id="inventoryItems" className='container'>
            <div className="row ">
            <h1 className='text-primary text-center mt-5 mb-4 p-3'> My Managing Inventory Items </h1>
            <div className="inventory-container ">
            {
                inventoryItems.map(inventoryItem => <InventoryItem
                key = {inventoryItem._id}
                inventoryItem = {inventoryItem}>

                </InventoryItem>)
            }
            </div>
            </div>
        </div>
    );
};

export default InventoryItems;
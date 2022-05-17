import React, { useEffect, useState } from 'react';
import InventoryItem from '../Home/InventoryItem/InventoryItem';

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:4000/inventoryItems')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])

    return (
        <div id="inventoryItems" className='container'>
        <div className="row">
        <h1 className='text-primary text-center mt-5'> Our Inventory Products</h1>
        <div className="inventory-container">
        {
            inventories.map(inventoryItem => <InventoryItem
            key = {inventoryItem._id}
            inventoryItem = {inventoryItem}>

            </InventoryItem>)
        }
        </div>
        </div>
    </div>
    );
};

export default ManageInventories;
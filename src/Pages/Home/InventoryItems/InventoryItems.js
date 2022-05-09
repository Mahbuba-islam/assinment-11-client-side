import React, { useEffect, useState } from 'react';

import './InventoryItems.css';

const InventoryItems = () => {

    const [InventoryItems, setInventoryItems] = useState([]);

    useEffect( ()=>{
        fetch('inventoryItems.json')
        .then(res => res.json())
        .then(data => setInventoryItems(data));
    }, [])

    return (
        <div id="inventory" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Inventory Products</h1>
            <div className="inventory-container">
            {
                InventoryItems.map(InventoryItem => <InventoryItem
                    key={InventoryItems.id}
                    InventoryItem={InventoryItem}
                >
                </InventoryItem>)
            }
            </div>
            </div>
        </div>
    );
};

export default InventoryItems;
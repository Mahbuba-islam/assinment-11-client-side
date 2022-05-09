import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({inventoryItem}) => {
    const {id, name, img, description, price} = inventoryItem;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/InventoryItem/${id}`);
    }
    return (
        <div className='InventoryItem'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default InventoryItem;
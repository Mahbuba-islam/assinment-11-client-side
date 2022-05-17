import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory , setInvntory] = useState({})
    const {  register, handleSubmit } = useForm();
    
    
    useEffect( ()=>{
        const url = `http://localhost:4000/inventoryItem/${id}`
        fetch(url)
       .then(res => res.json())
        .then(data => setInvntory(data))
    }, [])

//    const handleDeliver = event =>{
//        const updateQuantity = event.target.value;
//        console.log(JSON.stringify(inventory.quantity-1));
   
 
//    fetch(`http://localhost:4000/inventoryItem/${id}` , {
//     method: 'PUT',
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({updateQuantity})
    
//    })
//    .then(res => res.json())
//    .then(data => setInvntory( data));
   
//    };
     
   //post
   const onSubmit = data => {
    console.log(data);
    
    const url = `http://localhost:4000/inventoryItem/${id}?quantity`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    } )
};

  
    return (
        <div className='container w-50 py-5 text-center' >
          <div> <h2>Welcome to detail</h2>
                
                <img  src={inventory.img} alt="" />
                <p>{id}</p> 
            <h2>{inventory.name}</h2>
            <h4>Price: {inventory.price}</h4>
            <h3>Quantity:{inventory.quantity}</h3> 
            <p><small>{inventory.description}</small></p>
            <button className='btn btn-primary my-5'>Delivered</button>
            {/* <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}> */}
               
            <form className='d-flex flex-column w-50 mx-auto' onClick={()=>onSubmit(inventory.quantity)}>
               
                
                <input className='mb-2' placeholder='quantity ' type="number" {...register('quantity')} />
                
                <input type="submit" value="restock " />
            </form>
           </div>
            
            <div className='text-center'>
                <Link to="/manageInventories">
                    <button className='btn btn-primary my-5'>Manage Inventories</button>
                </Link>
            </div>
           
            
        </div>
    );
};

export default InventoryDetails;
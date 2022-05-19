import React from 'react';

const Management = ({management}) => {
    const {_id , title , description } = management;
    return (
        <div>
             <div className='InventoryItem py-2'>
           <h2>{title}</h2>
          <p>{description}</p>
          
            
        </div>
        </div>
    );
};

export default Management;
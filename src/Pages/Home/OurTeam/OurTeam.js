import React from 'react';


const OurTeam = ({ ourTeam }) => {
    const { name, position, image} = ourTeam;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
            <img src= {image } alt="" />
                <div className="card-body">
                 <h5 className="card-title">{name}</h5>
                    <p className="card-text">{position}</p>
                    
                </div>
            </div>
        </div>

    );
};

export default OurTeam;
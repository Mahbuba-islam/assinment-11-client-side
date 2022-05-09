import React from 'react';
import OurTeam from '../OurTeam/OurTeam';
import image1 from '../../../images/women.png'
import image2 from '../../../images/boy1.png'
import image3 from '../../../images/pexels-emre-keshavarz-3734847.png'
import image4 from '../../../images/men2.png'
import image5 from '../../../images/men4.png'
import image6 from '../../../images/men2.png'



const teams = [
    {id: 1, name: 'Ed Frazelle', position: 'President and CEO' , image: image1 },
    {id: 2, name: 'Chris Rock' , position: 'Chief Solutions Officer ', image: image2},
    {id: 3, name: 'Dwayne Rock' , position: 'Technology Officer' , image: image3 },
    {id: 4, name: 'Charlotte' , position: 'Warehouse assistant' , image: image4},
    {id: 5, name: 'Elijah', position: 'Warehouse Operator' , image: image5},
    {id: 6, name: 'William' , position: 'Warehouse Packer' , image: image6}
]

const OurTeams = () => {
    return (
        <div id="teams" className='container'>
            <h2 className='text-primary text-center mt-5'>Our Development Teams</h2>
            <div className="row">
                {
                    teams.map(ourTeam => <OurTeam
                        key={ourTeam.id}
                        ourTeam = {ourTeam}
                    ></OurTeam>)
                }
            </div>
        </div>
    );
};

export default OurTeams;
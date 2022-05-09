import React from 'react';
import OurTeam from '../OurTeam/OurTeam';


const teams = [
    {id: 1, name: 'Ed Frazelle', position: 'President and CEO'},
    {id: 2, name: 'Chris Rock' , position: 'Chief Solutions Officer '},
    {id: 3, name: 'Dwayne Rock' , position: 'Technology Officer'},
    {id: 4, name: 'Charlotte' , position: 'Warehouse assistant'},
    {id: 5, name: 'Elijah', position: 'Warehouse Operator'},
    {id: 6, name: 'William' , position: 'Warehouse Packer'}
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
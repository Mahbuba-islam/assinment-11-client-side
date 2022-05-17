import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurTeams from '../OurTeams/OurTeams';

import Services from '../Services/Services';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <OurTeams></OurTeams>
            <Services></Services>
            <div className='text-center'>
                <Link to="/manageInventories">
                    <button className='btn btn-primary my-5'>Manage Inventories</button>
                </Link>
            </div>
        </>
    );
};

export default Home;
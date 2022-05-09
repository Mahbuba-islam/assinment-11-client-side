import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../OurTeams/OurTeam';
import InventoryItems from '../InventoryItems/InventoryItems';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Experts></Experts>
        </>
    );
};

export default Home;
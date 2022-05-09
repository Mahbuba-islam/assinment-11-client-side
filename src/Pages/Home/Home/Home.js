import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurTeams from '../OurTeams/OurTeam';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <OurTeams></OurTeams>
        </>
    );
};

export default Home;
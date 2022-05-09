import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurTeams from '../OurTeams/OurTeam';
import Services from '../Services/Services';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <OurTeams></OurTeams>
            <Services></Services>
        </>
    );
};

export default Home;
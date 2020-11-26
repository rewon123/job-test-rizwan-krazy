import React from 'react';
import Body from './body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import OurApps from './Our apps/OurApps';
import Team from './our team/OurTeam';

// this page just design  

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Body />
            <Team />
            <OurApps />
            <Footer />
        </div>
    );
};

export default LandingPage;
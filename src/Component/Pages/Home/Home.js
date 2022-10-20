import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Contacts from '../../Shared/Contacts/Contacts';
import Footer from '../../Shared/Footer/Footer';
import Projects from '../../Shared/Projects/Projects';
import Skills from '../../Shared/Skills/Skills';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Contacts></Contacts>
            <Footer></Footer>
        </>
    );
};

export default Home;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Contacts from '../../Component/Shared/Contacts/Contacts';
import Footer from '../../Component/Shared/Footer/Footer';
import Header from '../../Component/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Main;
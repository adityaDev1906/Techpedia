import React from 'react';
import './mainLayout.css';
import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';


const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout;
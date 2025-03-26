import Header from '@/components/Header';
import Footer from '@/components/ui/Footer';
import React from 'react';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
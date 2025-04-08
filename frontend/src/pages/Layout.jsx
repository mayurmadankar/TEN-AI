import Header from '@/components/Header';
import Footer from '@/components/Foooter';
import React from 'react';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <main className='dark:bg-black'>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout
import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

/* only change happens between header and footer */
function Layout() {
    return (
        <>
            <Header/>
            <Outlet />      
            <Footer />
        </>
    )
}

export default Layout

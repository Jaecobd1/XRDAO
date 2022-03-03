import React from 'react'
import Nav from './nav'
import Footer from './nav/Footer'


const Layout = ({ children }) => {
    return (
        <>
        <div className="nav" >
        
            <Nav />
        </div>
        <div className="body">
        {children}
        </div>
        {/* <Footer /> */}
        <div className="footer">
           <Footer />
        </div>
        </>
    )
};

export default Layout;

import React from 'react'
import Nav from './nav'
import Footer from './nav/Footer'



const Layout = ({ children }) => {
    return (
        <>
        <div className="flex flex-col ">
        <div className="z-40 w-screen sticky top-0 rounded-b-xl drop-shadow-lg text-white" >
            <Nav />
        </div>
        <div className="z-0 body">
        {children}
        </div>
        {/* <Footer /> */}
        <div>
            
        </div>
        <div className="text-left text-slate-300 w-screen bottom-10 bg-grey ">
           <Footer />
        </div>
        </div>
        </>
    )
};

export default Layout;

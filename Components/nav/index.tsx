import LogoIMG from '../LogoIMG'
import Link from 'next/link'
import MenuImage from './Menu'
import X from '../x'
import { AnimatePresence, motion } from 'framer-motion'
import {useContext, useState, useEffect} from 'react'


function Menu(){
    return(
        <>
        <div className="hidden menu w-screen">
        <div className="flex-auto ">
        <div className="grid grid-cols-3">
            <div /><div />
            <div className="flex justify-end menuButton">
                        <Button />
                        </div>
                        </div>
        </div>
        <div>
            hello
        </div>
        </div>
        </>
    )
};


function Button() {
    const [loaded, setLoaded] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);
    const toggle = setMenuActive(!isMenuActive);
    
    return(
        <>
       {!isMenuActive ? ( 
        <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="buttonHover" onClick={toggle}>
       <MenuImage/>
       </motion.div>
       ):(
        <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="buttonHover" onClick={toggle}>
       <X/>
       </motion.div>
       )}
        </>
    )
};

function Nav(toggle) {
    
    // USE CONTEXT HOOK WENT TO SLEEP LEFT OFF HERE 

    return (
        <>
      

       <div className="grid sticky top-0 z-40 h-1/9 bg-white grid-cols-3 w-screen"> 
        <div className="contain justify-center cursor-pointer px-5 md:px-10">
            <LogoIMG />
           </div>
           <div>
    
           </div>
           {/* Menu Buttons */}
        <div className="menuButtonContainer">  
         <div className="menuButton">
         <Menu />   
            </div>
            </div>
           </div>
          
          
               
             
            
     
           
                
           </>
    );
};



export default Nav;

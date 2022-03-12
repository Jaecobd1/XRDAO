import LogoIMG from '../LogoIMG'
import Link from 'next/link'
import MenuImage from './Menu'
import X from '../x'
import { AnimatePresence, motion } from 'framer-motion'
import {useContext, useState, useEffect} from 'react'
import LinkList from '../Contexts/LinkList'
import Login from './Login'

  

function Button(isMenuActive) {
    return(
        <>
       {!isMenuActive ? ( 
        <div 
        
        className="buttonHover" >
       <MenuImage/>

       </div>
       ):(
        <div 

        className="buttonHover ">
          
       <X/>
    
       </div>
       )}
        </>
    )
};

//whileHover={{ scale: 1.2 }}
// whileTap={{ scale: 0.9 }}
function Nav() {
    
    const [loaded, setLoaded] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);

    
    // const toggle = {};
    const toggle = () => {setMenuActive(!isMenuActive)};
    
    useEffect(() => {
        
    }
    )

    return (
        <>
    
             
            
             {!isMenuActive ? ( 
                 <>
                 <div className="grid sticky top-0 z-40 h-full bg-grey grid-cols-3 w-screen"> 
                  <div className="flex items-center contain drop-shadow-lg cursor-pointer px-5 md:px-10">
                    <Link href="/" replace >
                        <a>
                        
                        <LogoIMG />
                        </a>
                    </Link>

                    </div>
                        <div className="flex justify-center" >
                            
                            </div>
                 <div  className="menuButtonContainer y-1/6 ">
                         
                            <div onClick={toggle} className="flex items-center justify-center drop-shadow-lg menuButton md:hidden" >
                                
       <MenuImage/>
       </div>
       <div className="hidden text-1xl md:inline-flex py-6">
       {LinkList.map(links => {
                
                return(
                    <div className="flex in-line text-center truncate px-10 snap-x items-center">
                        <div className="snap-center">
            <Link  href={links.href} replace={true} >
                <a>
                {links.title}
                </a>
                        </Link>
                        </div>
                    </div>
                    
           )
       })}
                                
                                <div className="flex justify-center md:hidden px-5">
                                    <Login />
                                    </div>
                            </div>
                            <div className="px-5">
                                    <Login />
                                    </div>
       </div>
        
       </div>
           </>
       ):(
        <>
        <div onClick={toggle} className="bg-grey grid-row-1 h-screen w-screen">
          <div className="grid sticky top-0  h-1/6 grid-cols-3 w-screen">
              <div />
              <div/>
          <div className="menuButton py-7" onClick={toggle}>
       <X/>
       </div>
       <div/>
      
       </div>
        
       <div className="bg-grey w-screen h-screen">
       
       {LinkList.map(links => {
                
                return(
                    <div className="p-10 px-20 justify-center text-4xl">
            <Link href={links.href} >
                <a>
                -{links.title}
                </a>
                        </Link>
            </div>
             ) })}
                            </div>
                           
           </div>  
       </>
       )}
            
         
                
           </>
    );
};



export default Nav;

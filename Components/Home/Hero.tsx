import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import NFTS from "../Images/Earth.jpeg"
import Link from 'next/link'
import { motion, Variants } from "framer-motion"
import ChevronDown from '../Images/chevron-down'




const variants = {
    enter: { opacity: 1, x:0, y:0 },
    exit: { opacity: 0, x: 0, y:0 },
}

function CardClass() {
    return (
        <div className="card">
            <div className="heroTitle">

            </div>
            
        </div>
    )
}

function TitleCard() {
    const [count, setCount] = useState(0);
    const GoToMain = () => {
        window.scrollTo(0, 1000)
    }
    return(
        <>
            <div className='flex flex-col justify-items-center w-screen items-center'> 
            {/* Hero Text */}
                   <div className="md:bg-black md:p-3 md:bg-opacity-40 rounded-xl md:text-center md:text-7xl text-6xl flex justify-center uppercase">
                    <h1 className="text-white opacity-100 z-30">Welcome to <br /><div className="text-8xl md:text-9xl">XRDAO</div></h1>
                    </div>
                    <br />
                    

                    <div className="heroButtons">
                    <div >
                        <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="buttonP ">
                            <Link href="XDT">
                                <p>XDT</p>
                            </Link>
                        </motion.button>
                    </div>
                    
                    {/* Learn more button */}
                    <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }} className="buttonS">
                        <Link href="Road_Map">
                            <div className="text-center">
                        <p>Road Map</p>
                        </div>
                        </Link>
                    </motion.button>
                   
                </div>
                
                <div className="md:absolute py-20 md:py-0 -bottom-40 scale-150">

                    {/* <Link href={}> */}


                    <motion.div
                        onClick={GoToMain}
                        animate={{
                            scale: [0.75, 1.25, 0.75, 0.75],
                            
                             
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 5],
                            repeat: Infinity,
                            repeatDelay: 0.1
                        }}
                        className="flex flex-col items-center justify-center md:p-2 hover:bg-white rounded-xl hover:bg-opacity-40">
                   <button onClick={GoToMain}>
                            <h1 className="text-2xl font-thin">Learn More</h1>
                            </button>
                        <ChevronDown />
                    </motion.div>
                    

                    {/* </Link> */}

                </div>
                    </div>
                    
       
        </>
    )
}

function Hero(img) {
    const [lastYPos, setLastYPos] = useState(1);
    const [textActive, setTextActive] = useState(true);
    useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            
            setTextActive(isScrollingUp);
            setLastYPos(yPos);
            
        }
        window.addEventListener('scroll', handleScroll, false);

        return() => {
            window.removeEventListener('scroll', handleScroll, false);
        };
    }, [lastYPos]);

    return (
        
        // const [clientWindowHeight, setClientWindowHeight] = useState("");

        // const handleScroll = () => {
        // setClientWindowHeight(window.scrollY);
        // };

        // useEffect(() => {
        // window.addEventListener("scroll", handleScroll); 
        // return () => window.removeEventListener("scroll", handleScroll);
        // });
        <>


        <div className="hero static" >

            <div className="relative drop-shadow-lg flex align-center text-4xl w-screen h-screen items-center z-10 ">
               {/* TITLE Card */}
               <motion.div initial={{x:10, opacity: 1}} animate={{opacity:( textActive ? 1 : 0)}} transition={{ opacity: {duration: 0.5}}} >
                <TitleCard />
                </motion.div>
                </div>
                

                   
                   
            

            {/* Hero Image */}

                <div className="static w-screen h-full z-0">
                        <div className="w- h-full bg-black">
                        
                        </div>
            <Image src={NFTS} objectFit="cover" layout="fill"/>
            {/* <HeroIMG /> */}
          </div>
           </div>
        </>
       
    )
}

export default Hero



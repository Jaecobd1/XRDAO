import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import {motion} from 'framer-motion'
import NFTS from '../public/Images/NFTS.png'
import {useState, useEffect} from 'react'
import Coins from '../Components/Images/coin.png'
import TokenInfo from '../Components/XDT/TokenInfo'



function Hero(){
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
    return(
        <>
    
        

        <div className="hero static" >

<div className="relative drop-shadow-lg flex align-center text-4xl w-screen h-screen items-center z-10 ">
   {/* TITLE Card */}
   <motion.div initial={{x:10, opacity: 1}} animate={{opacity:( textActive ? 1 : 0)}} transition={{ opacity: {duration: 0.5}}} >
    <TitleCard />
    </motion.div>
    </div>
    

       
       


{/* Hero Image */}

 <div className="static z-0">
<Image src={Coins} objectFit="cover" layout="fill"/>
{/* <HeroIMG /> */}
</div>
</div>
        
      </>
    )
}


function TitleCard(){
    return(
    <>
    <div className="">
    <div className="w-full h-screen text-white">

    <div className='card py-80'> 
        {/* Hero Text */}
               <div className="heroTitle text-bold">
                <p className="text-8xl md:text-9xl">XDT</p><p className="text-6xl md:text-8xl">XRDAO Token</p>
                </div>
                <br />
                

                <div className="heroButtons">
                <div >
                    <motion.button whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="buttonP ">
                        <Link href="XDT">
                            <p>Info</p>
                        </Link>
                    </motion.button>
                </div>
                
                {/* Learn more button */}
                <motion.button whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} className="buttonS">
                    <Link href="/WhitePaper">
                        <div className="text-center">
                    <p>White Paper</p>
                    </div>
                    </Link>
                </motion.button>
               
                </div>
                </div>
                <br/>
               
                    </div>
                    
                   
                
    </div>
   
    </>
    )
}

function InfoSection() {
    return(
        <>
    <div className="flex py-10 justify-center w-screen h-min">
                <div className="flex flex-col bg-black text-white rounded-xl text-center justify-center">
                    
        <div className="flex p-10 text-4xl"
        >More information can be found in the White Paper</div>
                
                <div className="p-5 flex justify-center">
                    <motion.button whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }} className="buttonS">
                    <Link href="/WhitePaper">
                        
                    <a>White Paper</a>
                    </Link>
                </motion.button>
                        </div>
                        
                    </div>
    </div>
    <br />
        <div className="w-screen py-4">
            <>
           
            </>
        </div>
    </>
    )
}

function XDT() {
    return (
        <>
        <Head>

        </Head>
        <div className="w-screen h-screen justify-center">
       <Hero />
       </div>
       <div>
        <div className="bg-grey">

            <TokenInfo />

        </div>
       <div className="bg-gradient-to-t to-grey from-slate-500  w-screen">
                    <InfoSection />
                    </div>
       </div>
        </>
    )
}

export default XDT

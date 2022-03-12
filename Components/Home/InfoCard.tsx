import Image from 'next/image'
import MapUI from '../Images/MapUI.png'
import { animationControls, motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import TradeGif from '../Images/Staking.png'
import Socials from './Socials'
import ReactPlayer from 'react-player'
import Builder from '../Images/Build.png'
import Connection from '../Images/Connect.png'
import GuyWithMap from '../Images/GuyWithMap.png'
import Gov from '../Images/Voting.png'
import XRDude from '../Images/XRDUDE.png'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import NFTs from '../Images/NFTs.png'
import jobs from '../Images/Jobs.jpeg'
function Connect() {
    

    
    return(
        <>
        <div className="">
        <div className="text-3xl md:text-4xl text-center">
                    <h2>Connect</h2>
                    <br/>
        </div>
        <div className="">
                    {/* Picture */}
                   <Image height="300" width="500" src={Connection}/>
        </div>
        <div className="text-Left p-3">
            <p>Login with metamask & you’re good to go. 
                    Add a telegram for notifications.

                    Connect with other users, friends, and followers. Find local events and happenings.
                    View NFTs staked on the map. Staked NFTs will eventually be viewable within Extended Reality and Beyond. Create and Enjoy experiences anywhere. The two main types of experiences are location/ environment based or surrounding.
</p>
        </div>
        </div>
        </>
    )
};
function Govern(){
    return(
        <>
        <div className="">
        <div className="text-3xl md:text-4xl text-center">
                    <h2>Govern</h2>
                    <br/>
        </div>
        <div>
                    {/* Picture */}
                    <Image src={Gov} />
        </div>
        <div className="text-left p-2">
                    <p>
                        {/* Govern text */}
                        Anyone who stakes an NFT, & verifies their telegram will be sent governance token. The White Paper goes into detail about much more detail about governance. The DAO will initally make smaller decisions but as the project expands the DAO will gain more control over the future of XRDAO as a whole.
            </p>
        </div>
        </div>
        </>
    )
};
function Explore(){
    return(
        <>
        <div className="">
        <div className="text-3xl md:text-4xl text-center">
                    <h2>Explore</h2>
                   < br/>
        </div>
        <div>
                    {/* Picture */}
                    <Image src={MapUI} />
        </div>
        <div className="text-left">
                    <p>
                       Local events can be posted and viewed at anytime! Small and local businesses can do Location based NFTs, Events can have AR buttons where you can recieve a POAP(Proof of Attenance Protocol). And you can also go view rare NFTs within the Real World.
                    </p> </div>
        </div>
        </>
    )
};

const Build = () => {
    return(
        <>
        <div className="">
        <div className="text-3xl md:text-4xl text-center">
            {/* Title */}
                    <h2>Build</h2>
                    <br/>
        </div>
        <div>
                    {/* Picture */}
                    <Image src={Builder} />
        </div>
        <div className="p-3 text-left">
        With our Creator Tool for PC & eventually XR, you can create 3d objects in your favorite software and import them into XRDAO and make them interactive! You can even link objects to a smart contract on any blockchain. 
        </div>
        </div>
        </>
    )

};

const Trade = () => {
    return(
        <>
        <div className=''>
        <div className="text-3xl md:text-4xl text-center">
            {/* Title */}
                    <p>Trade</p>
                    <br/>
        </div>
        <div>
                    {/* Picutre */}
                    <Image src={TradeGif} />
        </div>
        <div className="p-3">
        Users can buy and sell NFTs from the Map & marketplace! Using XDT and other tokens, the marketplace will help fund the DAO. we will allow other businesses to use our token for safe and easy transactions within XR.
        </div>
        </div>
        </>
    )
};
const Jobs = () => {
    return(
        <>
        <div className=''>
        <div className="text-3xl md:text-4xl text-center">
            {/* Title */}
                    <p>Jobs, Careers & Bounties</p>
                    <br/>
        </div>
        <div>
                    {/* Picutre */}
                    <Image src={jobs} />
        </div>
        <div className="p-3">
        <p>As XRDAO grows, the DAO Teams will need to grow as well. The DAO Teams will be able to decide if they need a new teammate and will vote from a series of video intervies. Positions within the DAOs will be careers. Jobs will be shorter term and will be similar to Bounties. Bounties are the shortest term form of hiring and will allow anyone to complete a bounty and get paid through a smart contract</p>
        </div>
        </div>
        </>
    )
};

function InfoCard() {

    const { ref, inView } = useInView({
        threshold: 0.1
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                scale: 0.5,
                opacity: 1,
                transition: {
                    type: "spring", duration: 2, bounce: 0.3
                }
            });
        
        }
        if (!inView) {
            animation.start({
                scale: 1, opacity: 0, transition: {
                type: "spring", duration:2, bounce: 0.3
            }})
        }
        console.log("useEffect hook, inView = ", inView);
    }, [inView])

    return (
        <>
               <div className="flex flex-col p-20 md:p-40 lg: h-1/6 justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-center text-white text-2xl md:text-6xl">
                <div className="z-10">
                    A location based multi-chain XR metaverse that is created, owned, and governed by its users.
                     
                     </div>
                


                <motion.div
                    className="relative"
                    animate={animation}
                >
                    {/* Image */}
                    <div ref={ref}>
                    <Image src={XRDude} />
                    
                        <br />
                        </div>
                </motion.div>
                
                


                <div className="grid grid-cols-3 space-x-5 text-2xl text-center items-center px-20">
                    {/* Road Map button and White Paper button */}
                     
                    <div className="flex justify-center text-center">
                        <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="buttonS w-min text-lg md:text-4xl">
                            <Link href="/WhitePaper">
                                <p>White Paper</p>
                            </Link>
                        </motion.button>
                    
                    </div>
                    <div />
                    <div className="flex items-center align-center justify-center h-min ">
                    {/* Learn more button */}
                    <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }} className="buttonP md:text-4xl" >
                        <Link href="/Road_Map">
                            <div className="text-center text-lg md:text-4xl w-min">
                        <p>Road Map</p>
                        </div>
                        </Link>
                        </motion.button>
                        </div>
                   
                    
                    
                </div>
            </div>
            <br />
            
            <div className="w-screen  bg-slate-100 p-10 rounded-xl text-center text-4xl md:text-6xl font-semibold text-primary">
                
                        <p>What is XRDAO?</p>
                       
                <div className="flex z-40 items-center justify-center flex-wrap text-grey basis-1/4 font-light text-2xl p-10">
                   
                    <p className="z-20">
                        Explore a new world on top of our own. A layer where you can connect with others, trade, explore, and create experiences & Interactions. XRDAO is building the Extended Reality Metaverse that is owned by its users. A platform built and governed by its users. XRDAO is a community driven project focused on giving users the access to a new layer not visable to the naked eye. That you can place NFTs, View NFTs, interact with Smart Contracts within the platform.
                             </p>
                    <div
                        
                        className="z-10 scale-125 w-1/2 items-center">
                        <Image src={ GuyWithMap} />
                        
                   </div>
                    
                    </div>
                </div>
                <br />
        <div className="drop-shadow-lg grid md:grid-cols-3 gap-4 p-5 justify-items-center space-around">
            
        <div className="Card bg-gradient-to-b from-grey to-black">
       
        <Connect />
    
        </div>
        
        <div className="Card bg-gradient-to-b from-grey to-black">
        <Build />
        </div>
       
        <div className="Card bg-gradient-to-b from-grey to-black">
        <Trade />
        </div>

        <div className=" Card bg-gradient-to-b from-grey to-black">
        <Govern />
        </div>

        <div className=" Card bg-gradient-to-b from-grey to-black">
        <Explore />
        </div>
 <div className=" Card bg-gradient-to-b from-grey to-black">
        <Jobs/>
        </div>
            </div>
        
       
        <Socials/>
            <div>
            
            <br />
            </div>
        
         
              
       </>
    )
}

export default InfoCard

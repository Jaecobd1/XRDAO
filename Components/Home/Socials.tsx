import Image from 'next/image'
import Medium from '../Images/Medium'
import Telegram from '../Images/Telegram'
import Twitter from '../Images/Twitter'
import Link from 'next/link'
import Reddit from '../Images/Reddit'
import Discord from '../Images/Discord'
import { useMoralis, useNewMoralisObject } from 'react-moralis'
import {useState, useEffect} from 'react'
import TeleUser from './TeleUser'



function Socials() {
    const { authenticate, isAuthenticated, setUserData, userError, isUserUpdating, user } = useMoralis();
    
    const [loggedIn, setLoggedIn] = useState(false);
    // const [isSubmited, changeSubmited] = useState(false);
    // user.attributes.telegram

    if (isAuthenticated) {
        setLoggedIn
    }
    function logging() {
        setLoggedIn(true);
    }
    
    const { isSaving, error, save } = useNewMoralisObject('Telegram');
    if (isSaving) {
        alert("Thank you for joining our telegram!")
    }
    function MetaMask() {
    return (
        <>
            <div className="flex flex-col space-y-5 items-center w-full p-5 text-white">
                <div className="flex">
                    <h1 className="text-2xl md:text-4xl"> Connect with Metamask for airdrops </h1>
               </div>
               
                <div className="flex">
                    <button onClick={ logging}>
                <Image src="https://img.icons8.com/nolan/64/metamask-logo.png" height="100" width="100" className="bg-gradient-to-tr from-primary to-white justify-center rounded-xl" />
                    </button>
                    </div>
                </div>
            </>
    )
}


    return (
                        <>
        <div className="p-10 w-full">
            
            {/* Card */}
            <div className="flex justify-center p-20 rounded-xl drop-shadow-2xl border-lightGrey border-4 bg-grey text-white text-center ">
                <div>
                    {/* Title */}
                    <h1 className="underline text-4xl md:text-6xl text-primary">Connect With <br/>XRDAO</h1>
                   <br/>
                    {/* Telegram form */}
                    <div className="">
                        
                   
                            <div className="flex text-2xl md:text-4xl w-full  text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none ">
                          
                                <div className="flex flex-col md:flex-row items-center">
                                    {!isAuthenticated ? (
                                        <div className="px-20 md:px-5 flex flex-col items-center justify-center" >
                                            <div onClick={() => authenticate()}>
                                                <MetaMask />
                                                <div className="hidden md:flex md:flex-col space-y-5 text-primary" >
                                                    <p>Download MetaMask for Browser</p>
                                                    <Link href="https://metamask.io/"  >
                                                    <a className="hover:text-slate-300 text-white underline">
                                                    MetaMask Website
                                                        </a></Link>
                                                </div>
                                                </div>
                                            <div className="flex flex-col items-center justify-center md:hidden ">
                                                <p className="text-primary">
                                                    If you cannot click this button download a metamask wallet and go to this website in the browser on there.
                                                </p>
                                                <br />
                                            <Link href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202" >
                                                    <a className="hover:text-slate-300 text-white underline">
                                                    MetaMask IOS
                                                        </a></Link>
                                            <br/>
                                             <Link href="https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&gl=US"  >
                                                    <a className="hover:text-slate-300 text-white underline">
                                                        MetaMask Andriod
                                                        </a></Link>
                                            </div>
                                            
                                        </div>
                                    ) : (
                                        <div className="px-20 md:px-5">
                                            <TeleUser />
                                        </div>
                                    )}
                                </div>
                                </div>
                    </div>
{/* https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&gl=US */}
                    {/* Other link Icons */}
                    {/* Medium */}
                    <br />
                    <hr className="hidden md:inline-flex"/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="md:p-5 p-1 flex">
                            <h1 className="text-3xl ">Check out our weekly articles on Medium!</h1>
                            <br/>
                            </div>
                            <div>
                        <Link href="https://medium.com/@xrdao"  >
                            <div className="">
                                <div className="h-min w-min"> <Medium />
                                    </div>
                                </div>
                                </Link>
                                </div>
                        
                    </div>
                    <br />
                    <hr className="hidden  md:inline-flex"/>
                    <br/>
                    {/*  Other Icons */}
                        <div className="flex flex-col space-y-5 w-full justify-center items-center ">
                             <div>
                            <h1 className="px-10 xl:text-6xl text-center justify-self-end md:text-4xl text-2xl"> Other Socials</h1>
                            </div>
                        <div className="flex space-x-3 md:space-x-10">
                            <Link href="https://www.reddit.com/r/XRDAO/" >
                        <a>
                    <Reddit />
                        </a>
                    </Link>
                            
                        <Link href="https://discord.gg/DPetMTYt" ><a>
                    <Discord/>
                        </a></Link>
                        <Link href="https://twitter.com/XRDAO_App" >
                        <a><Twitter /></a>
                            </Link>
                            </div>
                       
                    </div>
            </div>
            </div>
            </div>
            </>
    )
}

export default Socials

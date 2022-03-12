import Image from 'next/image'
import MapUI from '../Images/Staking.png'
import { useMoralis,  } from 'react-moralis'
import { ethers } from 'ethers';
import Web3 from "web3";


function TokenInfo() {
    
    const info = [
        {
            parent: "Max Supply:",
            child: "2.8 Billion"
            
        },
       
        {
            parent: "Network:",
            child: "Matic"
        },
         {
            parent: "Token Address:",
            child: "0xe80973A088B3f7FeCb9A74AB271B6Cb93693c2C0"
        },
        {
            parent: "Initial Release",
            child: "1 Billion XDT",
        },
        {
            parent: "XRDAO Total Locked",
            child: "1.8 Billion XDT"
        }
    ]
    
    
    

    return (
        <>
        
        <div className="w-screen -my-40 h-full bg-grey">
             <div className="w-screen z-10 h-10 bg-gradient-to-t from-black">
                <br/>
                </div>
                        <div className="flex py-20 bg-black justify-center">
                <div className="buttonP w-42 scale-150 text-center">White Paper</div>
                </div>
                <div className="bg-gradient-to-b from-black">
                <br/>
                </div>

                <div className="flex py-10 items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-center text-white text-6xl">
                    <div className="flex flex-col drop-shadow-xl rounded-xl bg-grey w-4/5 justify-center">
                <div className="text-center text-white">
                    <br/>
                    <h1>Token Info</h1>
                </div>
                <div className="p-10 text-2xl text-center text-white">
                <h2>XDT will be used to power the XDAO platform</h2>
                            {/* Map Token Info to here */}
                            <ul className="text-left justify-start items-start">
                                {info.map((info) => (
                                    <>
                                        <br/>
                                        <hr />
                                        <br/>
                                    <li>
                                        <div className="flex p-10 px-20 text-left space-x-5">
                                        <div className="font-bold"
                                        >
                                            <p>{ info.parent}</p>
                                        </div>
                                        <div className="font-thin break-all">
                                            <p>
                                                {info.child}
                                            </p>
                                            </div>
                                            </div>
                                        </li>
                                        </>
                                ))}
                                <br/>
                                        <hr />
                                        <br/>
                                {/* <div className="flex justify-center">
                                    <button className="hover:bg-black"
                                    onClick={() => addTokenToWallet()}
                                    >
                                        <h2>Add XDT to Metamask</h2>
                                    </button>
                                </div> */}
                            </ul>
                        </div>
                        </div>
        <div className="">
                    <br />
                    
                    </div>
                    </div>

                <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-center text-white text-6xl">
                <div className="text-center text-white">
                    <br/>
                    <h1>Stake</h1>
                </div>
                <div className="p-10 text-2xl text-center text-white">
                <p>Stake NFTs on Map or stake XDT to earn XDT higher value earn more. Pool supply will be 500 million XDT. XDT amount will change but earnings translated to USD should not. If NFT value not found earnings will be low. This pool will be replenished through Swapping fees on XDT Swap.</p>
            </div>

                <div className="flex p-5 w-screen  justify-center items-center">
                    {/* Image */}
                    <div className="  border-secondary">
                        <Image src={MapUI} />
                        </div>
                      
                    </div>
                    <div className="p-5">
                            <h1>Token will be available on Ethereum Mainnet Later</h1>
                </div>
        <div className="py-20">
                 
                      
                        
                    </div>
                </div>
                
        </div>
        </>
    )
}

export default TokenInfo

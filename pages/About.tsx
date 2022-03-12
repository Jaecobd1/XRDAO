import Image from 'next/image'
import Jake from '../Components/Images/Jake.png'
import Elias from '../Components/Images/Elias.png'



function About() {
    return (
        <div className="w-full text-center h-screen">
            <div>
                <br/>
                <h1>Founders Dao</h1>
                <br/>
            </div>
            <div className="grid md:grid-cols-3">
               
                    <>
                        <div>
                        {/* Picture */}
                        <div className="">
                            <Image src={Jake} width="200" height="200" layout="fixed" className="rounded-full"/>
                        </div>
                        <div className="text-2xl">
                            {/* Name */}
                        <h2>Jake Dobler</h2>
                        </div>
                        {/* Title */}
                        <div>
                            <h3>Founder & Developer</h3>
                        </div>
                        {/* description */}
                        </div>
                         <div>
                        {/* Picture */}
                        <div className="">
                            <Image src={Elias} width="200" height="200" layout="fixed" className="rounded-full"/>
                        </div>
                        <div className="text-2xl">
                            {/* Name */}
                        <h2>Elias Inskeep</h2>
                        </div>
                        {/* Title */}
                        <div>
                            <h3>Marketing & Community Management</h3>
                        </div>
                        {/* description */}
                        </div>    
                    
                        </>
                
            </div>
            <div>
                <br/>
                <h1>Developers Dao</h1>
                <div>
                    <br />
                            <h3>We currently have 3 developers but we respect their choice to stay anonymous</h3>
               <br/>
                </div>
                <div className="grid grid-cols-3">
                    <h2 className="text-2xl">Solidity</h2>
                    <h2 className="text-2xl">Next Js</h2>
                </div>
                <br/>
            </div>
             
        </div>
    )
}

export default About

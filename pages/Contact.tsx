import { AiOutlineDown } from "react-icons/ai"


function Send() {
    return (
        <>

            </>
    )
}
function Card() {

    return (
        <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col rounded-2xl h-5/6 w-5/6 bg-white">
                {/* Title */}
                <div className="w-full md:text-6xl text-4xl text-center py-5">
                <p>Contact Us</p>
                </div>
                
                {/* Grid col 2 */}
                <form>
                <div className="justify-center grid grid-cols-2 space-x-5 p-5">
                
                    <div className="flex justify-center">
                            {/* Name */}
                            
                            <div className="bg-grey p-5 rounded-lg">
                                
                                <input
                                    type="text"
                                    placeholder="name"
                                    className="bg-transparent text-white text-4xl px-5"
                                    required={true}
                                />
                           
                            </div>
                        
                    </div>
                    <div className="flex">
                        {/* Drop Down */}
                        <div className="flex w-min bg-grey p-5 rounded-lg">
                            <input type="text" placeholder="Telegram" className="flex text-white bg-transparent text-4xl px-5" />
                            <div className="flex">
                                <AiOutlineDown/>    
                        </div>
                        </div>
                        </div>
                    
                        {/* Text */}
                        
                        <textarea
                            required
                        >
                            
                            </textarea>

                    </div>
                    <div>
                        <Send />
                    </div>
                </form>
                </div>
        </div>
    )
}

function form() {
    
}




function Contact() {
    return (
        <>
         
            <div className="w-sceen h-screen bg-gradient-to-tr from-black via-purple to-primary">
                <div className="h-screen w-screen bg-black opacity-50">
                    <Card />
                    </div>
            </div>
        </>
        
    )
}

export default Contact

import Telegram from "../Images/Telegram"
import { useState } from 'react'
import { useMoralis, useNewMoralisObject } from 'react-moralis'





function TeleUser() {
    const { authenticate, isAuthenticated, setUserData, user, account } = useMoralis();
    const { isSaving, error, save } = useNewMoralisObject("Telegram");
    const [telegramUser, setTelegramUser] = useState('');
    const onSubmit = (e) => {
        authenticate({
            onComplete: () => save({ telegramUser, user, account }),
            signingMessage: "Thank you for signing up for Telegram!"
        })
         e.preventDefault();
        alert("Thank you!");
        
       

    };


    return (
        <div>
            <form onSubmit={onSubmit} >
                        <div className="flex flex-col items-center">
                            <label className="md:text-4xl text-slate-100 text-2xl">Enter Telegram Username for Community notifications and Airdrop Notifications</label>
                            <br />
                      <div className="flex flex-auto max-w-md rounded-xl  bg-black  border-2 p-3">
                        <input className="appearance-none w-full bg-transparent underline text-white" id="Telegram" type="text" placeholder="@TelegramUsername" onChange={e => setTelegramUser(e.target.value)}/>
                        <button
                            type="submit"

                                    
                            >
                                 <div className="rounded-full w-min justfity-end bg-gradient-to-tr from-primary to to-purple-800 hover:bg-gradient-to-bl">
                                    <Telegram />
                                    </div>
       
                                </button>
                                
                            </div>
                            <div className="py-3 w-full">
                               
                           </div>
                            </div>
                        </form>
            </div>
    )
}

export default TeleUser

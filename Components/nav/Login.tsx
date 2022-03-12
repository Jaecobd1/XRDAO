import { useMoralis, useNewMoralisObject } from 'react-moralis'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md';

function Login() {

    const { authenticate, isAuthenticated, isUnauthenticated, logout } = useMoralis();
    



   
         return (



             <div className="flex items-center justify-center bg-gradient-to-br from-primary to-black   p-2 border-2 border-white drop-shadow-lg rounded-lg ">
                 <div className="px-5">
                     {!isAuthenticated ? (
                         <div onClick={ () => authenticate()}>
                             <h1 className="text-xs w-min">Login with Metamask</h1>
                            
                         </div>
                     ) : (
                             <div onClick={() => logout()}>
                        <h1 className="text-xs text-center w-min">Log out</h1>     
                     </div>
                     )}
                
            </div>
            <div
                className="flex items-center"
                >
              <Image src="https://img.icons8.com/nolan/64/metamask-logo.png" height="50" width="50" className="bg-white rounded-lg" />
        </div></div>
    )
  
   
}

export default Login

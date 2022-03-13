import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../Components/nav'
import Layout from '../Components/Layout'
import { motion } from "framer-motion"
import {MoralisProvider} from 'react-moralis'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     
    <MoralisProvider 
    appId={process.env.NEXT_PUBLIC_APP_ID ?? "AppId Undefined Fallback"} 
    serverUrl={process.env.NEXT_PUBLIC_SERVER_URL ?? "ServerUrl Undefined Fallback"}>
        <Layout>
          
            <Component {...pageProps} />
           
        </Layout>
  
        </MoralisProvider>
         
    </>

  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../Components/nav'
import Layout from '../Components/Layout'
import { motion } from "framer-motion"
import {MoralisProvider} from 'react-moralis'
import Footer from '../Components/nav/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <MoralisProvider 
    appId={process.env.NEXT_PUBLIC_APP_ID ?? "AppId Undefined Fallback"} 
    serverUrl={process.env.NEXT_PUBLIC_SERVER_URL ?? "ServerUrl Undefined Fallback"}>
        <Script
          strategy="lazyOnload"
          src={'https://www.googletagmanager.com/gtag/js?id=G-9JJZCKLZVQ'}
        />
        <Script
          strategy="lazyOnload"
        >
          {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9JJZCKLZVQ');
          `}
          </Script>

        <div className="z-40 w-screen sticky top-0 rounded-b-xl drop-shadow-lg text-white" >
         
            <Nav />
        </div>
            <Component {...pageProps} />
           
         <div className="text-left text-slate-300 w-screen bottom-10 bg-grey ">
          <Footer />
          
        
        </div>
        </MoralisProvider>
       
    </>

  )
}

export default MyApp

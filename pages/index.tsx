import Head from 'next/head'
import dynamic from 'next/dynamic'
import Nav from '../Components/nav'
import Hero from '../Components/Home/Hero'
import InfoCard from '../Components/Home/InfoCard'
import Section from '../Components/Section'

import Script from 'next/script'

// HOMEPAGE

export default function Home() {
  return (
    <>
  {/* Page Header */}
    <Head>
      <title>XRDAO | Home </title>
        <meta name="" content="XRDAO HOMEPAGE | " />
        
    </Head>

    <div className="flex flex-col">
    
      {/* Hero Section */}
      <div className='text-white'>
        <div className=' h-screen w-screen justify-center drop-shadow-xl z-0'>
        <Hero />
      </div>
      </div>
      <Section />
      

      {/* Information cards 1 */}
        <div className="h-full bg-darkGrey">
        
      <InfoCard />
        </div>
     
      {/* Footer */}
    </div>
    
    </>
  )
}

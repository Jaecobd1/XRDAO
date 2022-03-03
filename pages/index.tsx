import Head from 'next/head'
import dynamic from 'next/dynamic'
import Nav from '../Components/nav'
import Hero from '../Components/Hero'
import InfoCard from '../Components/InfoCard'


// HOMEPAGE

export default function Home() {
  return (
    <>
    <Head>
      <title>XRDAO | Home </title>
      <meta name="" content="XRDAO HOMEPAGE | "/>
    </Head>
    <div>

      {/* Hero Section */}
      <div className='text-white'>
        <div className='h-screen w-screen z-0'>
        <Hero />
      </div>
      </div>


      {/* Information cards 1 */}
      <div className="h-screen bg-slate-700 z-20">
      
      </div>
     
      {/* Footer */}
    </div>
    
    </>
  )
}

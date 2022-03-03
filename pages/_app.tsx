import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../Components/nav'
import Layout from '../Components/Layout'
import { motion } from "framer-motion"





function MyApp({ Component, pageProps, }: AppProps) {
  return (
    <>

    <Layout>
    <Component {...pageProps} />
    </Layout>

    </>

  )
}

export default MyApp

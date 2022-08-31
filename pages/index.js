import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import Header from '../components/Header.js'
import ModelY from '../components/ModelY'
import ModelS from '../components/ModelS'
import ModelX from '../components/ModelX'
import SolarPanels from '../components/SolarPanels'
import SolarRoof from '../components/SolarRoof'
import Accessories from '../components/Accessories'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla-clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar/>
      <Header/>
      <ModelY/>
      <ModelS/>
      <ModelX/>
      <SolarPanels/>
      <SolarRoof/>
      <Accessories/>
      <Footer/>

      

     
    </>
  )
}

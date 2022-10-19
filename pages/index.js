import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HOMEPAGE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugit!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, non!</p>
      <Footer />
    </div>
  )
}

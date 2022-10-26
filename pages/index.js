import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HOMEPAGE</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit obcaecati ipsum perspiciatis ex reiciendis molestias. Veniam culpa velit ab quod temporibus, error blanditiis! Illo fuga molestiae harum animi suscipit.
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis culpa aut exercitationem placeat provident nam deleniti ipsa itaque id, architecto voluptatum eligendi est ab autem esse! Exercitationem, laudantium maxime!
      </p>
      <Link href="/people">
        <a className={styles.btn}>See people list</a>
      </Link>
    </div>
  )
}

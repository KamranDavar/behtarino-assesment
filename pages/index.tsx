import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>products list</title>
        <meta name="description" content="Behtarino products list" />
      </Head>

    </div>
  )
}

export default Home

import Head from 'next/head'
import styles from '@/styles/ice-cream.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuppa Joe Cafe | Ice Cream</title>
        <meta name="description" content="Cuppa Joe Cafe Ice Cream" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
import Head from 'next/head'
import styles from '@/styles/breakfast-items.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuppa Joe Cafe | Breakfast</title>
        <meta name="description" content="Cuppa Joe Cafe Breakfast Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.breakfastHeader}>This will be for breakfast items</h1>
      </main>
    </>
  )
}

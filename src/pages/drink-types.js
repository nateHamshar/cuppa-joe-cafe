import Head from 'next/head'
import styles from '@/styles/drink-types.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuppa Joe Cafe | Drink Types</title>
        <meta name="description" content="Cuppa Joe Cafe Drink Types" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.drinkTypesHeader}>this will explain the different types of drinks</h1>
      </main>
    </>
  )
}

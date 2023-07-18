import Head from 'next/head'
import styles from '@/styles/featured-drinks.module.css'

const featuredDrinks = () => {
    return(
    <>
      <Head>
        <title>Cuppa Joe Cafe | Drinks</title>
        <meta name="description" content="Cuppa Joe Cafe featured drinks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.drinksHeader}>This will be the drinks page</h1>
      </main>
    </>
    );
}
 
export default featuredDrinks;
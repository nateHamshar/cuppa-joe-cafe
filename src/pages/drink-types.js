import Head from 'next/head'
import styles from '@/styles/drink-types.module.css'
import Image from 'next/image'

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
        <section className={styles.introSection}>
          <h1 className={styles.introHeader}>Coffee Gets Confusing,</h1>
          <p className={styles.introDetails}>So we put together some simple diagrams to explain the differences. Note that these diagrams are not perfect, and the ratios may be different from other coffee shops. These are just generalizations for how we do things at Cuppa Joe. </p>
        </section>
        <section className={styles.typesSection}>
          <div className={styles.drinkTypeDiv}>
            <h1 className={styles.drinkName}>Latte</h1>
            <div className={styles.drinkImage}>
              <Image
              src="/latte.png"
              fill={true}
              alt=''
              />
            </div>
          </div>
          <div className={styles.drinkTypeDiv}>
            <h1 className={styles.drinkName}>Cappuccino</h1>
            <div className={styles.drinkImage}>
              <Image
              src="/cappuccino.png"
              fill={true}
              alt=''
              />
            </div>
          </div>
          <div className={styles.drinkTypeDiv}>
            <h1 className={styles.drinkName}>Americano</h1>
            <div className={styles.drinkImage}>
              <Image
              src="/americano.png"
              fill={true}
              alt=''
              />
            </div>
          </div>
          <div className={styles.drinkTypeDiv}>
            <h1 className={styles.drinkName}>Cafe au Lait</h1>
            <div className={styles.drinkImage}>
              <Image
              src="/cafeaulait.png"
              fill={true}
              alt=''
              />
            </div>
          </div>
          <div className={styles.drinkTypeDiv}>
            <h1 className={styles.drinkName}>Machiatto</h1>
            <div className={styles.drinkImage}>
              <Image
              src="/machiatto.png"
              fill={true}
              alt=''
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

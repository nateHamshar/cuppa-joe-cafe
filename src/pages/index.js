import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Head>
        <title>Cuppa Joe Cafe | Home</title>
        <meta name="description" content="Cuppa Joe Cafe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cuppa_joe_mug_icon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.landingDiv}>
          <button className={styles.landingCTA}><a className={styles.CTAlink} href='/featured-drinks'>View Drink Menu</a></button>
          <div className={styles.landingImage}>
            <Image
              src="/hero-image.png"
              fill={true}
              alt=''
            />
          </div>
        </div>
        <div className={styles.breakfastDiv}>
          <button className={styles.breakfastCTA}><a className={styles.CTAlink} href='/breakfast-items'>View Breakfast Menu</a></button>
          <div className={styles.pastryImage}>
            <Image
              src="/pastry-circle.png"
              fill={true}
              alt=''
            />
          </div>
        </div>
      </main>
    </>
  )
}

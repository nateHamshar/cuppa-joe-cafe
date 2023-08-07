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
              src="/hero-coffee-image.png"
              fill={true}
              alt=''
            />
          </div>
        </div>
        <div className={styles.breakfastDiv}>

          <h1 className={styles.breakfastHeader}>Need Breakfast On The Go?</h1>
          
          <div className={styles.pastryImage}>
          <button className={styles.breakfastCTA}><a className={styles.CTAlink} href='/breakfast-items'>View Breakfast Menu</a></button>
            <Image
              src="/breakfast-circle.png"
              fill={true}
              alt=''
              className={styles.rotate}
            />
          </div>
        </div>

        <div className={styles.iceCreamBanner1}></div>
        <div className={styles.iceCreamDiv}>
          
          <div className={styles.iceCreamText}>
            <h1 className={styles.iceCreamHeader}>Craving Sugar?</h1>
            <h2 className={styles.iceCreamSubheader}>We've got you covered.</h2>
            <a href='/drink-types' className={styles.iceCreamCTA}>See Ice Cream Menu</a>
          </div>
          <div className={styles.iceCreamImage}>
            <Image
              src="/new-cone-image.png"
              fill={true}
              alt=''
              className={styles.cakeCone}
            />
          </div>
        </div>
        <div className={styles.iceCreamBanner2}></div>


        <div className={styles.aboutSection}>
          
        </div>
      </main>
    </>
  )
}

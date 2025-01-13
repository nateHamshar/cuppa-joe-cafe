import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Carousel from "../components/Carousel.js"


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

        <section className={styles.landingDiv}>
          <div className={styles.heroImage}>
            <Image
              src="/cuppajoelobby.jpg"
              fill={true}
              alt=''
            />
            <div className={styles.imageOverlay}></div>
            <h1 className={styles.heroTitle}>Cuppa Joe Cafe</h1>
            <div className={styles.heroCTADiv}>
              <a href="tel:4345910100" className={styles.CTAfirst}>(434) 591-0100</a>
              <a href="/featured-drinks" className={styles.CTAsecond}>View Menu</a>
            </div>
          </div>
        </section>

        
        <section className={styles.aboutSection}>
          <h1 className={styles.aboutHeader}></h1>
          <p className={styles.aboutParagraph}>Discover the heart of your community at Cuppa Joe Cafe, a locally owned shop for coffee enthusiasts. Immerse yourself in the rich aroma of our hand-crafted coffee and espresso drinks, complemented by an array of delightful homemade pastries. Join us at Cuppa Joe, where every cup is a taste of local pride and passion.</p>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.featuredImages}></div>
          <p className={styles.aboutParagraph}>
          From rich and robust coffee blends to refreshing smoothies, we have crafted a menu that caters to every taste bud. If you're starting your day, explore our tempting breakfast options featuring freshly baked pastries and savory sandwiches.
          </p>
        </section>
  {/*    
        <div className={styles.breakfastDiv}>

          <h1 className={styles.breakfastHeader}>Need Breakfast On The Go?</h1>
          
          <div className={styles.pastryImage}>
          <button className={styles.breakfastCTA}><a className={styles.CTAlink} href='/error-page'>View Breakfast Menu</a></button>
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
            <a href='/error-page' className={styles.iceCreamCTA}>See Ice Cream Menu</a>
          </div>
          <div className={styles.iceCreamImage}>
            <Image
              src="/cake-cone.png"
              fill={true}
              alt=''
              className={styles.cakeCone}
            />
          </div>
        </div>
        <div className={styles.iceCreamBanner2}></div>

        */}
        <div className={styles.storeDetailsSection}>
          <h1 className={styles.storeHoursHeader}>Store Hours</h1>
          <div className={styles.hoursDiv}>
            <ul className={styles.dayList}>
              <li className={styles.dayLI}>Sunday</li>
              <li className={styles.dayLI}>Monday</li>
              <li className={styles.dayLI}>Tuesday</li>
              <li className={styles.dayLI}>Wednesday</li>
              <li className={styles.dayLI}>Thursday</li>
              <li className={styles.dayLI}>Friday</li>
              <li className={styles.dayLI}>Saturday</li>
            </ul>
            <ul className={styles.hoursList}>
              <li className={styles.hoursLI}>8:00 - 3:00</li>
              <li className={styles.hoursLI}>7:00 - 5:00</li>
              <li className={styles.hoursLI}>7:00 - 5:00</li>
              <li className={styles.hoursLI}>7:00 - 8:00</li>
              <li className={styles.hoursLI}>7:00 - 5:00</li>
              <li className={styles.hoursLI}>7:00 - 5:00</li>
              <li className={styles.hoursLI}>8:00 - 3:00</li>
            </ul>
          </div>
          <div className={styles.locationDiv}>
            <h1 className={styles.address}>90 Joshua Ln, Palmyra, VA 22963</h1>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.3770713380713!2d-78.31570492365849!3d37.898248205037135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3ecbf6dbc22ef%3A0x625f304d86c8ab5b!2sCuppa%20Joe!5e0!3m2!1sen!2sus!4v1691457695711!5m2!1sen!2sus" width="350" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className={styles.spacerDiv}></div>

  
      </main>
    </>
  )
}

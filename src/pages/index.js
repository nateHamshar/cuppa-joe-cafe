
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { motion } from "framer-motion"
import Hero from '@/components/Hero'

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

        <Hero />
        
        <section className={styles.aboutSection}>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-cba74b88-f8d4-4614-8406-64679fb7d75b" data-elfsight-app-lazy></div>
        </section>

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

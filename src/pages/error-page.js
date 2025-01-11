import Head from 'next/head'
import styles from '@/styles/error-page.module.css'
import Image from 'next/image'

export default function Error() {
  return (
    <>
      <Head>
        <title>Cuppa Joe Cafe | Error</title>
        <meta name="description" content="Cuppa Joe Cafe error page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Oh Quack!</h1>
        <div className={styles.constructionDuck}>
            <Image
                src="/construction-duck.webp"
                fill={true}
                alt=''
            />
        </div>
        <h2 className={styles.text}>This page is still under construction.</h2>
        <a href='/' className={styles.link}>Go Back to Home Screen</a>
      </main>
    </>
  )
}

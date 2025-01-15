import Head from 'next/head'
import styles from '@/styles/menu.module.css'
import Image from 'next/image'


const Menu = () => {
    return (
        <>
        <Head>
            <title>Cuppa Joe Cafe | Home</title>
            <meta name="description" content="Cuppa Joe Cafe" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/cuppa_joe_mug_icon.png" />
        </Head>
        <main className={styles.main}>
            <div className={styles.menuImage}>
                <Image
                    src="/menu.JPG"
                    fill={true}
                    alt=''
                />
            </div>
        </main>
        </>
    );
}
 
export default Menu;
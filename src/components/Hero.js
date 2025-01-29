'use client'
import styles from '@/styles/Home.module.css'
import {motion} from "framer-motion"
import Image from'next/image'


const Hero = () => {
    return (
        <section className={styles.landingDiv}>
           <div className={styles.heroImage}>
                <Image
                src="/cuppaHero.jpg"
                fill={true}
                alt=''
                priority={true}
                className={styles.heroImageComponent}
                />
            </div>
            <div className={styles.imageOverlay}></div>
            
            <motion.h1 className={styles.heroTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >Cuppa Joe Cafe
            </motion.h1>
            
            <motion.div className={styles.heroCTADiv}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1.5 }}>

                <a href="tel:4345910100" className={styles.CTAfirst}>(434) 591-0100</a>

                <a href="/menu" className={styles.CTAsecond}>View Menu</a>

            </motion.div>
        
        </section>
    );
}
 
export default Hero;
'use client'
import styles from '@/styles/Home.module.css'
import {motion} from "framer-motion"
import Image from'next/image'


const Hero = () => {
    return (
        <section className={styles.landingDiv}>
          <div className={styles.heroImage}>
                <Image
                src="/cuppajoelobby.jpg"
                fill={true}
                alt=''
                />
                <div className={styles.imageOverlay}></div>
                    <motion.h1 className={styles.heroTitle}
                        initial={{
                        opacity: 0,
                        bottom: -10
                        }}
                        whileInView={{opacity: 1, bottom: 0}}
                    >Cuppa Joe Cafe</motion.h1>
                <motion.div className={styles.heroCTADiv}
                    initial={{ opacity: 0, bottom: -30 }}
                    whileInView={{ opacity: 1, bottom: 0 }}
                    transition={{ duration: 2 }}
                >
                    <a href="tel:4345910100" className={styles.CTAfirst}>(434) 591-0100</a>
                    <a href="/menu" className={styles.CTAsecond}>View Menu</a>
                </motion.div>
            </div>
        
        </section>
    );
}
 
export default Hero;
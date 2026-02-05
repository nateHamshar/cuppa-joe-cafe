'use client'
import styles from '@/styles/Home.module.css'
import {motion} from "framer-motion"
import Image from'next/image'


const Hero = () => {
    return (
        <section className={styles.landingDiv}>
            

            <div className={styles.heroContent}> 
                
                <motion.h1 className={styles.heroTitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >Cuppa Joe Cafe
                </motion.h1>
                
                <motion.div className={styles.heroCTADiv}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.5 }}
                >

                    <a href="tel:4343732739" className={styles.CTAfirst}>(434) 373-2739</a>

                    <a href="/menu" className={styles.CTAsecond}>View Menu</a>

                </motion.div>
            </div>
        </section>
    );
}
 
export default Hero;

'use client'

import {useEffect, useState } from 'react';
import styles from '../styles/nav.module.css'
import Image from 'next/image';

const Nav = () => {

    const [navHidden, setNavHidden] = useState(true)
    const [viewportWidth, setViewportWidth] = useState(0)
    

    useEffect(() => {
        setViewportWidth(parseInt(window.innerWidth))

        const handleResize = () => {
            setViewportWidth(window.innerWidth)
        }

        console.log(viewportWidth)

        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize);
          };

    })
    
    const toggleNav = () => {
        if (navHidden == true) {
            setNavHidden(false)
            document.body.style.overflow = 'hidden'
        } else {
            setNavHidden(true)
            document.body.style.overflow = ''
        }
    }


    if (viewportWidth <= 768) {
    return (
        <div className={styles.container}>
                <div className={styles.logo}>
                    <a className='logoLink' href='/'>
                    <Image 
                        src="/cuppa_joe_mug.png"
                        width={50}
                        height={50}
                        alt='Cuppa Joe Logo'
                        priority
                    />
                    </a>
                </div>
                <div className={styles.navButton} onClick={() => toggleNav()}>|||</div>
                {!navHidden && <div className={styles.navToggler}>
                        <div className={styles.navItem}><a className={styles.navLink}href="/">Home</a></div>
                        <div className={styles.navItem}><a className={styles.navLink}href="/menu">Menu</a></div>
                        <div className={styles.navItem}><a className={styles.navLink}href="/featured-drinks">Featured Drinks</a></div>
                        
                        <div className={styles.navItem}><a className={styles.navLink}href="/drink-types">Types of Drinks</a></div>
                        <div className={styles.navInfo}>
                            <h1 className={styles.storeName}>Cuppa Joe Cafe</h1>
                            <a className={styles.storeNumber} href='tel:434-373-2739'>+1 (434) 373-2739</a>
                            <h2 className={styles.storeAddress}>90 Joshua Lane</h2>
                            <h2 className={styles.storeAddress}>Palmyra, VA 22963</h2>
                        </div>
                    </div>
                }
                {!navHidden && <div className={styles.blurScreen} onClick={() => toggleNav()}></div>}
            </div>
    )
    } else {
        return (
            <div className={styles.bigNavContainer}>
                <div className={styles.bigLogo}>
                        <a className='logoLink' href='/'>
                        <Image 
                            src="/cuppa_joe_mug.png"
                            width={50}
                            height={50}
                            alt='Cuppa Joe Logo'
                            priority
                        />
                        </a>
                </div>
                <div className={styles.navLinksDiv}>
                    <a className={styles.bigNav}href="/">Home</a>
                    <a className={styles.bigNav}href="/menu">Menu</a>
                    <a className={styles.bigNav}href="/featured-drinks">Featured Drinks</a>
                    <a className={styles.bigNav}href="/drink-types">Types of Drinks</a>
                </div>
            </div>
        )
    }

}

 
export default Nav;

import styles from '../styles/fullNav.module.css';
import { Image } from 'next/image';

const FullNav = () => {
    return (
        <nav>
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
            <div className={styles.navLinks}>
                <a className={styles.navLink}href="/">Home</a>
                <a className={styles.navLink}href="/menu">Menu</a>
                <a className={styles.navLink}href="/featured-drinks">Featured Drinks</a>
                <a className={styles.navLink}href="/drink-types">Types of Drinks</a>
            </div>
        </div>
        </nav>
    );
}
 
export default FullNav;
import styles from '../styles/nav.module.css'
import Image from 'next/image';
const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a className='logoLink' href='/'>
                <Image 
                    src="/cuppa_joe_mug.png"
                    width={50}
                    height={50}
                    alt='Cuppa Joe Logo'
                />
                </a>
            </div>
            <div className={styles.navButton}>|||</div>
        </div>
    );
}
 
export default Nav;
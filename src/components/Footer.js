import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.header}>Cuppa Joe Cafe</h1>
            <a href="tel:4345910100" className={styles.number}>+1 (434) 591-0100</a>
            <p className={styles.address}>90 Joshua Lane <br></br>Palmyra, VA 22963</p>
        </footer>
    );
}
 
export default Footer;
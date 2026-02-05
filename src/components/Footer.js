import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.header}>Cuppa Joe Cafe</h1>
            <a href="tel:4343732739" className={styles.number}>+1 (434) 373-2739</a>
            <p className={styles.address}>90 Joshua Lane <br></br>Palmyra, VA 22963</p>
        </footer>
    );
}
 
export default Footer;

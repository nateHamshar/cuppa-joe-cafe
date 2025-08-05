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
        <main>
            <section className={styles.menuSection}>
                <div className={styles.menuGroup}>
                    <h1 className={styles.groupHeader}>Coffee Drinks</h1>
                    <ul className={styles.groupList}>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Drip & Cold Brews</p>
                            <p className={styles.menuPrice}>2.75 / 3.00 / 3.50</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Cappucino</p>
                            <p className={styles.menuPrice}>4.25 / 5.03 / 5.81</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Latte</p>
                            <p className={styles.menuPrice}>4.25 / 5.03 / 5.81</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Flavored Latte</p>
                            <p className={styles.menuPrice}>5.19 / 5.97 / 6.74</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Americano</p>
                            <p className={styles.menuPrice}>3.37 / 3.89 / 4.41</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Espresso Shots</p>
                            <p className={styles.menuPrice}>2.23 / 3.51 / 4.58</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Cortado</p>
                            <p className={styles.menuPrice}>4.15</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>French Press</p>
                            <p className={styles.menuPrice}>6.12</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuGroup}>
                    <h1 className={styles.groupHeader}>Non-Coffee Drinks</h1>
                    <ul className={styles.groupList}>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Chai Latte</p>
                            <p className={styles.menuPrice}>4.10 / 4.87 / 5.81</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Matcha Latte</p>
                            <p className={styles.menuPrice}>4.10 / 4.87 / 5.81</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Hot Chocolate</p>
                            <p className={styles.menuPrice}>3.63 / 4.15 / 4.67</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Fruit Smoothie</p>
                            <p className={styles.menuPrice}>4.93 / 5.71 / 6.48</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Protein Smoothie</p>
                            <p className={styles.menuPrice}>6.69</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Hot & Iced Tea</p>
                            <p className={styles.menuPrice}>2.34</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Bottled Water</p>
                            <p className={styles.menuPrice}>1.97</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Canned Sodas</p>
                            <p className={styles.menuPrice}>1.82</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Juice</p>
                            <p className={styles.menuPrice}>1.82</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuGroup}>
                    <h1 className={styles.groupHeader}>Breakfast & Snacks</h1>
                    <ul className={styles.groupList}>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Breakfast Sandwiches</p>
                            <p className={styles.menuPrice}>6.23</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Bagels</p>
                            <p className={styles.menuPrice}>3.63</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Muffins</p>
                            <p className={styles.menuPrice}>4.15</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Coffee Cake</p>
                            <p className={styles.menuPrice}>3.89</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Crumb Cake</p>
                            <p className={styles.menuPrice}>3.89</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Danish</p>
                            <p className={styles.menuPrice}>3.63</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Scones</p>
                            <p className={styles.menuPrice}>3.11</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Cinnamon Roll</p>
                            <p className={styles.menuPrice}>4.67</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Apple Turnover</p>
                            <p className={styles.menuPrice}>2.59</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Fruit Pie Bar</p>
                            <p className={styles.menuPrice}>3.63</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Biscotti</p>
                            <p className={styles.menuPrice}>1.56</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuGroup}>
                    <h1 className={styles.groupHeader}>Ice Cream</h1>
                    <ul className={styles.groupList}>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>One Scoop Cake Cone</p>
                            <p className={styles.menuPrice}>4.98</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Two Scoop Cake Cone</p>
                            <p className={styles.menuPrice}>7.47</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>One Scoop Waffle Cone</p>
                            <p className={styles.menuPrice}>5.50</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Two Scoop Waffle Cone</p>
                            <p className={styles.menuPrice}>8.04</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>One Scoop Bowl</p>
                            <p className={styles.menuPrice}>4.15</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Two Scoop Bowl</p>
                            <p className={styles.menuPrice}>6.59</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Milkshake</p>
                            <p className={styles.menuPrice}>7.78</p>
                        </li>
                        <li className={styles.groupListItem}>
                            <p className={styles.menuItem}>Soda Floats</p>
                            <p className={styles.menuPrice}>6.38</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        </>
    );
}
 
export default Menu;
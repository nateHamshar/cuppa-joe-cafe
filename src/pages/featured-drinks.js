import Head from 'next/head'
import styles from '@/styles/featured-drinks.module.css'

const featuredDrinks = () => {
    return(
    <>
      <Head>
        <title>Cuppa Joe Cafe | Drinks</title>
        <meta name="description" content="Cuppa Joe Cafe featured drinks and flavors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <h1 className={styles.drinksHeader}>Featured Drinks</h1>
          <p className={styles.drinksDescription}>The featured drinks list are able to be made into just about any type of drink. These choices are the most common flavor combinations that are ordered. If you don't see what you are looking for, we can mix and match any of the flavors to make you the perfect drink!</p>
        </section>
        <section className={styles.featuredDrinksSection}>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Black & White</h1>
            <p className={styles.drinkFlavors}>Mocha & White Mocha</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Milky Way Out</h1>
            <p className={styles.drinkFlavors}>Mocha & Caramel</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Samoa</h1>
            <p className={styles.drinkFlavors}>Mocha, Caramel, & Coconut</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Cinnamon Toast</h1>
            <p className={styles.drinkFlavors}>White Mocha & Brown Sugar Cinnamon</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Snow White</h1>
            <p className={styles.drinkFlavors}>White Mocha & Vanilla</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Cinderella</h1>
            <p className={styles.drinkFlavors}>White Mocha & Caramel</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Creme Brulee</h1>
            <p className={styles.drinkFlavors}>Vanilla & Caramel</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Churro</h1>
            <p className={styles.drinkFlavors}>Caramel, Vanilla, & Brown Sugar Cinnamon</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Salty Monkey</h1>
            <p className={styles.drinkFlavors}>Banana, Caramel, & Coconut</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Patty's CPL</h1>
            <p className={styles.drinkFlavors}>Salted Caramel, Irish Cream, & Brown Sugar Cinnamon</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Italian Nutjob</h1>
            <p className={styles.drinkFlavors}>Hazelnut, Coconut, & Amaretto</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>The Godfather</h1>
            <p className={styles.drinkFlavors}>Mocha, Hazelnut, Coconut, & Amaretto</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Nutella</h1>
            <p className={styles.drinkFlavors}>Mocha & Hazelnut</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>Girlish Figure</h1>
            <p className={styles.drinkFlavors}>Vanilla, Caramel, & Hazelnut <br></br>(All Sugar-Free)</p>
          </div>
          <div className={styles.drinkDiv}>
            <h1 className={styles.drinkName}>The Thing</h1>
            <p className={styles.drinkFlavors}>Salted Caramel & Toasted Marshmallow</p>
          </div>
        </section>
        <section className={styles.flavorsSection}>
          <h1 className={styles.flavorsHeader}>Individual Flavors</h1>
          <p className={styles.flavorsList}>Mocha ~ White Mocha ~ Amaretto ~ Vanilla ~ French Vanilla ~ Hazelnut ~ Caramel ~ Salted Caramel ~ Coconut ~ Irish Cream ~ English Toffee ~ Peppermint ~ Frosted Mint ~ Toasted Marshmallow ~ Brown Sugar Cinnamon ~ Banana ~ Raspberry ~ Sugar Free Vanilla ~ Sugar Free Caramel ~ Sugar Free Hazelnut</p>
        </section>
      </main>
    </>
    );
}
 
export default featuredDrinks;
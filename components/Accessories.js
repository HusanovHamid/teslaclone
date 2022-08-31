import React from 'react'
import styles from '../styles/Home.module.css'
import  Reveal  from 'react-reveal/Reveal'

const Accessories = () => {
  return (
    <section className={styles.section}>
        <Reveal effect="fadeInUp">
        <div className={styles.textsArea}>
            <h3>Accessories</h3>
            <p>Order Online for <span className={styles.touchless}>Touchless Delivery</span> </p>
        </div> 
        </Reveal>

        <Reveal effect="fadeInUp2">
 <div className={styles.buttons}>
            <div className={styles.btnMain}>
            <a href="#" className={styles.btn}>
                    Custom Order
                </a>
                <a href="#" className={styles.btn}>
                    Existing Inventory
                </a>
            </div>
        </div>
        </Reveal>
       

    </section>
  )
}

export default Accessories
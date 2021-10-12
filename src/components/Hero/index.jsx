import React from 'react'
import styles from './styles.module.css'
import partner from '../../assets/partner.jpg'
import lban from '../../assets/lban.png'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.smHero}>
                <h1>Lotus Upcore Support Program</h1>
                <p>A Power-up for your business</p>
                <div className={styles.flex}>
                    <a href="https://lotusbetaanalytics.com">
                        <img src={lban} alt="Lotus Beta" />
                    </a>
                    <a href="https://lotusbetaanalytics.com">
                        <img src={partner} alt="MS Gold Partner" />
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Hero

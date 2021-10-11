import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import styles from './styles.module.css'
import logo from '../../assets/logo.png'

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <img src={logo} alt="LBAN" />
                <h3>Lotus Upcore</h3>
            </div>
          
              <a href="mailTo:businesssupport@lotusbetaanalytics.com" className={styles.btn}>
         <FaPhoneAlt /> Contact
        </a>
           
        </div>
    )
}

export default Navigation

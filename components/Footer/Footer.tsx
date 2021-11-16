import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';


const Footer: FC = ({children}) => {

    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    )
}


export default Footer;
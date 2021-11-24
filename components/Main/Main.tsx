import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';


const Main: FC = ({ children }) => {


    return (
        <main className={styles.main}>
            {children} 
        </main>
    )
}


export default Main
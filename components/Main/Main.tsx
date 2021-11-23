import React, { FC, useEffect } from 'react';
import styles from '../../styles/Home.module.css';


const Main: FC = ({ children }) => {


    useEffect(() => {
        console.log(localStorage.length)
    }, [])


    return (
        <main className={styles.main}>
            {children} 
        </main>
    )
}


export default Main
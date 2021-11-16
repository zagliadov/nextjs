import React, { FC } from 'react';
import styles from '../../styles/Home.module.css';


const Main: FC = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}

            <style jsx>{`
                main {
                    margin-top: 60px;
                }
            
            `}</style>
        </main>
    )
}


export default Main
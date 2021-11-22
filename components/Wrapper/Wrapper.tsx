import Head from 'next/head';
import React, { FC } from 'react';
import { ITitle } from '../../interface/interface';
import styles from '../../styles/Home.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Wrapper: FC<ITitle> = ({ children, title = 'Next App' }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="nextjs graphq apollo" />
                <meta name="description" content="this is apllooooo!!" />
                <meta charSet="utf-8" />
            </Head>
            <Header />
            {children}
            <Footer>
                Footer
            </Footer>
        </div>
    )
}

export default Wrapper;
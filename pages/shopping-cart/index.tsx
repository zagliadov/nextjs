import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { NextPage } from 'next';
import React from 'react';
import Footer from '../../components/Footer/Footer';

const ShoppingCart: NextPage = () => {


    return (
        <Wrapper title={'Shopping cart'}>
            <Header />
            <Main>
                <h2>ShoppingCart page</h2>

            </Main>

            <Footer>
                Footer
            </Footer>
        </Wrapper>
    )
}


export default ShoppingCart;

import Wrapper from '../../components/Wrapper/Wrapper';
import Main from '../../components/Main/Main';
import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import React from 'react';


// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     try {
//         const response = await fetch(`${process.env.API_HOST}/${ctx.params.id}`);
//         const products = await response.json();

//         if (!products) {
//             return {
//                 notFound: true,
//             }
//         }

//         return {
//             props: { products },
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }



const ShoppingCart: NextPage = () => {

    if(localStorage.getItem('products')) {
       console.log(JSON.parse(localStorage.getItem('products'))) 
    }
    
    
    return (
        <Wrapper title={'Shopping cart'}>
            <Main>
                <h2>ShoppingCart page</h2>

            </Main>
        </Wrapper>
    )
}


export default ShoppingCart;

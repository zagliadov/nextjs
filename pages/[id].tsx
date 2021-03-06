import dotenv from 'dotenv';
import { NextPage } from "next";
import { GetServerSideProps } from 'next';
import Wrapper from '../components/Wrapper/Wrapper';
import Main from '../components/Main/Main';
import GoodsList from '../components/GoodsList/GoodsList';
import ProductsWrapper from '../components/ProductsWrapper/ProductsWrapper';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        dotenv.config();
        const response = await fetch(`${process.env.API_HOST}/${ctx.params.id}`);
        const products = await response.json();

        if (!products) {
            return {
                notFound: true,
            }
        }

        return {
            props: { products },
        }
    } catch (error) {
        console.log(error)
    }

}


const Auto: NextPage<any> = ({ products }) => {


    return (
        <Wrapper title='t-shirt'>
            <Main>
                <ProductsWrapper>
                    <GoodsList products={products} />
                </ProductsWrapper>

            </Main>
        </Wrapper>
    );
};

export default Auto;

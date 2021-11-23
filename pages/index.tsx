import dotenv from 'dotenv';
import Wrapper from "../components/Wrapper/Wrapper";
import Main from "../components/Main/Main";
import { NextPage, GetStaticProps } from 'next';
import { IProps } from '../interface/interface';
import ProductsList from '../components/ProductsList/ProductsList';
import ProductsWrapper from '../components/ProductsWrapper/ProductsWrapper';
import FrontPage from '../components/ FrontPage/FrontPage';


export const getStaticProps: GetStaticProps = async () => {
  try {
    dotenv.config();
    const response = await fetch(`${process.env.API_HOST}/products`);
    const products = await response.json();

    if (!products) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        products: products,
      }
    }
  } catch (error) {
    console.log(error)
  }

}

const Index: NextPage<IProps> = ({ products }) => {


  return (
    <Wrapper title={'Home page'}>
      <Main>
        <FrontPage />

        <ProductsWrapper>
          <ProductsList products={products} />
        </ProductsWrapper>
      </Main>

    </Wrapper>
  )
}


export default Index;
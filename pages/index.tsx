import Wrapper from "../components/Wrapper/Wrapper";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NextPage } from 'next';
import { IProps } from '../interface/interface';
import ProductsList from '../components/ProductsList/ProductsList';
import ProductsWrapper from '../components/ProductsWrapper/ProductsWrapper';
import FrontPage from '../components/ FrontPage/FrontPage';

const Index: NextPage<IProps> = ({ products }) => {

  return (
    <Wrapper title={'Home page'}>
      <Header />



      <Main>

        
        <FrontPage />

        <ProductsWrapper>
          <ProductsList products={products} />
        </ProductsWrapper>
      </Main>

      <Footer>
        Footer
      </Footer>

    </Wrapper>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:4200/products');
  const products = await response.json();

  return {
    props: {
      products,
    }
  }
}

export default Index;
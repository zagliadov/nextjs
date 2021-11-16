import Wrapper from "../components/Wrapper/Wrapper";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Index() {

  return (
    <Wrapper title={'Home page'}>
      <Header />
      <Main>
        <h1>nextjs</h1>
      </Main>

      <Footer> 
        Footer
      </Footer>

    </Wrapper>
  )
}


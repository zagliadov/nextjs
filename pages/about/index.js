import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const About = () => {

    return (
        <Wrapper title={'About page'}>
            <Header />
            <Main>
                <h2>About page</h2>
            </Main>

            <Footer>
                Footer
            </Footer>
        </Wrapper>
    )
}

export default About;
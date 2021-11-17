import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import { NextPage } from 'next';

const Profile: NextPage = () => {

    return (
        <Wrapper title={'Profile page'}>
            <Header />
            <Main>
                <h2>Profile page</h2>
            </Main>

            <Footer>
                Footer
            </Footer>
        </Wrapper>
    )
}

export default Profile;
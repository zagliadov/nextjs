import Wrapper from '../../components/Wrapper/Wrapper';
import Main from '../../components/Main/Main';
import { NextPage } from 'next';

const Profile: NextPage = () => {

    return (
        <Wrapper title={'Profile page'}>
            <Main>
                <h2>Profile page</h2>
            </Main>

        </Wrapper>
    )
}

export default Profile;
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PostsList from '../../components/PostsList/PostsList';
import { NextPage } from 'next';
import React from 'react';
import { IProps } from '../../interface/interface';
import Footer from '../../components/Footer/Footer';

const Posts: NextPage<IProps> = ({ posts }) => {


    return (
        <Wrapper title={'Posts page'}>
            <Header />
            <Main>
                <h2>Posts page</h2>
                <PostsList posts={posts} />
            </Main>

            <Footer>
                Footer
            </Footer>
        </Wrapper>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();

    return {
        posts
    }
}

export default Posts;

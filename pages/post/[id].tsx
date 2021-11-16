import Wrapper from '../../components/Wrapper/Wrapper';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IProp } from '../../interface/interface';
import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';


const PostItem: NextPage<IProp> = ({ post }) => {

    const router = useRouter();

    return (
        <Wrapper title={`Post ${router.query.id}`}>
            <Header />
            <Main>
                <h2>Posts {router.query.id}</h2>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </Main>

            <Footer>
                Footer Post {router.query.id}
            </Footer>
        </Wrapper>
    )
}

PostItem.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post = await response.json();

    return {
        post
    }
}

export default PostItem;
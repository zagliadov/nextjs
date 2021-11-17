import Wrapper from "../components/Wrapper/Wrapper";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { NextPage } from 'next';
import { IProps } from '../interface/interface';
import PostList from '../components/PostsList/PostsList';
import { Grid } from "@mui/material";

const Index: NextPage<IProps> = ({ posts }) => {

  return (
    <Wrapper title={'Home page'}>
      <Header />
      <Main>
        <h1>Posts</h1>
        <Grid container spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}>
          <PostList posts={posts} />
        </Grid>

      </Main>

      <Footer>
        Footer
      </Footer>

    </Wrapper>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    }
  }
}

export default Index;
import { NextPage } from "next";
import Wrapper from '../components/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from "../components/Footer/Footer";

export const getServerSideProps = async (ctx) => {

    const response = await fetch(`http://localhost:4200/${ctx.params.id}`);
    const data = await response.json();
    return {
        props: { data },
    }
}


const Auto: NextPage<any> = ({ data }) => {


    return (
        <Wrapper title='t-shirt'>
            <Main>
                {data && data.map((item) => {
                    return (
                        <p key={item.id}>{item.title}</p>
                    )
                })}
            </Main>
        </Wrapper>
    );
};

export default Auto;

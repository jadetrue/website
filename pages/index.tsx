import {GetStaticProps} from "next";
import Head from "next/head";
import {getSortedPostsData} from "../lib/posts";
import Layout from "../components/Layout";
import HomeSplash from "../components/HomeSplash";
import About from "../components/About";
import Blog from "../components/Blog";
// import Projects from "../components/Projects";

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        imageUrl: string;
    }[];
}) {
    return (
        <Layout>
            <Head>
                <title>Jade True | Front-end Developer</title>
                <meta
                    name="description"
                    content="Hey, I'm Jade True. A Front-end Developer based in North Somerset. Watch me grow here!"
                />
                <meta
                    property="og:image"
                    content="https://www.jadetrue.co.uk/preview.png"
                />
            </Head>
            <HomeSplash />
            <About />
            {/* <Projects /> */}
            <Blog allPostsData={allPostsData} />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

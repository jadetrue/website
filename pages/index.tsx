import {GetStaticProps} from "next";
import Head from "next/head";
import {getSortedPostsData} from "../lib/posts";
import Layout from "../components/Layout";
import HomeSplash from "../components/HomeSplash";
import About from "../components/About";
import Blog from "../components/Blog";
import Script from "next/script";
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
                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <Script strategy="lazyOnload">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
                </Script>
                <title>Jade True | Front-end Developer</title>
                <meta
                    name="description"
                    content="Hey, I'm Jade True. A Front-end Developer based in North Somerset. Find out more about me and the tech I use / am learning by visiting some of the projects I've been working on."
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

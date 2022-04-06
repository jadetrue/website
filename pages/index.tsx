import {GetStaticProps} from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";

import {getSortedPostsData} from "../lib/posts";
import Layout from "../components/Layout";
import HomeSplash from "../components/HomeSplash";

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    return (
        <Layout>
            <Head>
                <title>Jade True | Front-end Developer</title>
                <meta
                    name="description"
                    content="Hey, I'm Jade True. A Front-end Developer based in North Somerset. Find out more about me and the tech I use / am learning by visiting some of the projects I've been working on."
                />
            </Head>
            <HomeSplash />
            {/* About */}
            {/* Blogs */}
            <section>
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map(({id, date, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>{date}</small>
                        </li>
                    ))}
                </ul>
            </section>
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

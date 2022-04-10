import {GetStaticProps} from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import {getSortedPostsData} from "../lib/posts";
import Layout from "../components/Layout";
import HomeSplash from "../components/HomeSplash";
import About from "../components/About";
import Projects from "../components/Projects";

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
            <About />
            <Projects />
            <section>
                <div className="container">
                    <div className="mt-8 max-w-3xl px-3 text-left md:mt-0">
                        <h1 className="mb-4 text-5xl font-bold">Blog</h1>
                        <ul>
                            {allPostsData.map(({id, date, title}) => (
                                <li key={id}>
                                    <div className="h-auto max-w-sm rounded-lg bg-red-200">
                                        <Image
                                            src={
                                                "/images/myexperience-blog.jpeg"
                                            }
                                            height={4032}
                                            width={1908}
                                            layout="responsive"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <Link href={`/posts/${id}`}>
                                        <h1 className="text-xl">
                                            <a>{title}</a>
                                        </h1>
                                    </Link>
                                    <br />
                                    <small>{date}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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

import {GetStaticProps} from "next";
import Head from "next/head";
import Link from "next/link";

import {getSortedPostsData} from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

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
        <>
            <Head>
                <title>Jade's website</title>
            </Head>
            <section className="bg-red-200">
                <p>
                    I am a passionate, self-taught Junior Front End Developer,
                    with a background in Project Management.
                </p>
                <br />
                <p>
                    My end goal is to make pretty websites that are pleasing to
                    the eye, whilst giving the best possible experience to the
                    user!
                </p>
            </section>
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
        </>
    );
}

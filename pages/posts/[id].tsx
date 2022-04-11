import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import {GetStaticProps, GetStaticPaths} from "next";
import Layout from "../../components/Layout";
import dayjs from "dayjs";
import Link from "next/link";

export default function Post({
    postData,
}: {
    postData: {
        title: string;
        date: string;
        imageUrl: string;
        contentHtml: string;
    };
}) {
    const formatDate = dayjs(postData.date).format("D MMMM YYYY");

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="prose m-auto max-w-4xl text-left text-xl">
                <h1 className="mt-20 mb-2 text-center text-3xl font-normal">
                    {postData.title}
                </h1>
                <div className="text-md mb-8 text-center font-thin">
                    {formatDate}
                </div>
                <img
                    src={postData.imageUrl}
                    className="m-auto h-96 w-fit rounded-lg"
                />
                <div
                    className="mt-10"
                    dangerouslySetInnerHTML={{__html: postData.contentHtml}}
                />
                <Link href="/">
                    <a className="mb-10">Back to home</a>
                </Link>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
};

import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import {GetStaticProps, GetStaticPaths} from "next";
import Layout from "../../components/Layout";
import dayjs from "dayjs";

export default function Post({
    postData,
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
}) {
    const formatDate = dayjs(postData.date).format("D MMMM YYYY");
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="m-auto max-w-4xl text-left">
                <h1 className="mb-2 text-2xl font-normal">{postData.title}</h1>
                <div className="text-s mb-10">{formatDate}</div>
                <div
                    className="mt-20"
                    dangerouslySetInnerHTML={{__html: postData.contentHtml}}
                />
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

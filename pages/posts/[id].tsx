import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import {GetStaticProps, GetStaticPaths} from "next";
import Layout from "../../components/Layout";
import dayjs from "dayjs";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
    const advancedFormat = require("dayjs/plugin/advancedFormat");
    dayjs.extend(advancedFormat);

    const formatDate = dayjs(postData.date).format("Do MMMM YYYY");

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
                <div className="relative h-48 w-full md:h-96">
                    <Image
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                        src={postData.imageUrl}
                        alt={postData.title}
                        className="m-auto h-auto w-fit rounded-lg md:h-96"
                    />
                </div>
                <div
                    className="mt-10"
                    dangerouslySetInnerHTML={{__html: postData.contentHtml}}
                />
                <Link href="/">
                    <a className="flex flex-row no-underline">
                        <div className="mr-2 align-middle">
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </div>
                        <div className="from-cyan-500 to-blue-500 font-bold hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                            Back to home
                        </div>
                    </a>
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

import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

export interface Props {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        imageUrl: string;
    }[];
}

export const Blog: React.FC<Props> = ({allPostsData}) => {
    return (
        <div className="container my-24 w-full md:my-56">
            <div className="m-auto mt-8 w-full max-w-3xl px-3 text-left md:mt-0 md:w-fit">
                <h1 className="mb-10 text-5xl font-bold">Blog</h1>
                <ul>
                    {allPostsData.map(({id, date, title, imageUrl}) => {
                        const formatDate = dayjs(date).format("D MMMM YYYY");
                        return (
                            <Link href={`/posts/${id}`}>
                                <li
                                    key={id}
                                    className="hover:border-doubled rounded-lg border border-gray-200 p-5 hover:-translate-y-6  hover:scale-100 hover:cursor-pointer hover:bg-gradient-to-bl hover:from-cyan-500/25 hover:to-blue-500/25"
                                >
                                    <img
                                        src={imageUrl}
                                        alt={title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                    <h1 className="mt-4 text-xl font-normal">
                                        {title}
                                    </h1>
                                    <p className="mt-2">Posted {formatDate}</p>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Blog;

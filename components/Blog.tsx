import dayjs from "dayjs";
import Image from "next/image";
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
        <div className="container my-24 w-full md:my-40">
            <div className="mt-8 w-full px-3 text-left md:mt-0">
                <h1 className="mb-10 text-5xl font-bold">Blog</h1>
                <ul className="flex w-full flex-row flex-wrap gap-8">
                    {allPostsData.map(({id, date, title, imageUrl}) => {
                        const advancedFormat = require("dayjs/plugin/advancedFormat");
                        dayjs.extend(advancedFormat);

                        const formatDate = dayjs(date).format("Do MMMM YYYY");
                        return (
                            <Link href={`/posts/${id}`}>
                                <li
                                    key={id}
                                    className="mediumBoxShadow h-full rounded-lg border border-gray-100 hover:-translate-y-6 hover:cursor-pointer hover:bg-gradient-to-bl hover:from-cyan-500/25 hover:to-blue-500/25 lg:w-1/3"
                                >
                                    <div className="relative h-40 w-full">
                                        <Image
                                            loading="eager"
                                            objectFit="cover"
                                            objectPosition="center"
                                            layout="fill"
                                            src={imageUrl}
                                            alt={title}
                                            className="w-full max-w-sm rounded-t-md"
                                        />
                                    </div>
                                    <div className="py-5 px-4">
                                        <h1 className="text-xl font-normal">
                                            {title}
                                        </h1>
                                        <p className="mt-2 italic">
                                            {formatDate}
                                        </p>
                                    </div>
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

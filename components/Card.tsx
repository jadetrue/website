import Link from "next/link";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";

export interface Props {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    tags: string[];
    body: string;
    link: string;
}

const Card: React.FC<Props> = ({
    title,
    subtitle,
    imageUrl,
    tags,
    body,
    link,
}) => {
    console.log(tags.map((tag) => tag.toString()));
    return (
        <div className="boxShadow h-full rounded-lg bg-white p-5 m-10 max-w-sm">
            <header className="text-xl font-normal">{title}</header>
            <p className="mt-2 mb-6">{subtitle}</p>
            <Image
                src="/images/beer-project-nology.png"
                height={300}
                width={500}
                layout="responsive"
                className="rounded"
            />
            <div className="w-full flex flex-row flex-wrap gap-2 my-6">
                {tags.map((tag) => (
                    <Tag text={tag.toString()} styles="px-3 py-0.5" />
                ))}
            </div>
            <div className="mt-6">{body}</div>
            <Link href={link}>
                <a className="mt-6 flex justify-end">View project</a>
            </Link>
        </div>
    );
};

export default Card;

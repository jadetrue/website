import Link from "next/link";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

export interface Props {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    tags: string[];
    body?: string;
    to?: string;
    link?: string;
}

const Card: React.FC<Props> = ({
    title,
    subtitle,
    imageUrl,
    tags,
    body,
    to,
    link,
}) => {
    return (
        <div className="mediumBoxShadow hover:a:underline my-10 h-full max-w-sm rounded-lg border border-gray-100 bg-white  p-5 hover:bg-gradient-to-bl hover:from-cyan-500/25 hover:to-blue-500/25">
            <header className="text-xl font-normal">{title}</header>
            <p className="mt-2 mb-6">{subtitle}</p>
            <Image
                src={imageUrl}
                height={300}
                width={500}
                layout="responsive"
                className="rounded"
            />
            <div className="my-6 flex w-full flex-row flex-wrap gap-2">
                {tags.map((tag) => (
                    <Tag text={tag.toString()} styles="px-3 py-0.5" />
                ))}
            </div>
            <div className="mt-6">{body}</div>
            <div className="mt-6 flex w-full flex-row justify-between">
                {link && (
                    <Link href={link}>
                        <a className="w-fit">
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                    </Link>
                )}
                {to ? (
                    <Link href={to}>
                        <a className="flex w-fit justify-end hover:underline hover:underline-offset-1">
                            View project
                        </a>
                    </Link>
                ) : (
                    <p>Details page coming soon...</p>
                )}
            </div>
        </div>
    );
};

export default Card;

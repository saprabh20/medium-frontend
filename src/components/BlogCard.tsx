import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex justify-center items-center">
                        <Avatar name={authorName} />
                    </div>
                    <div className="font-extralight pl-2 text-sm flex justify-center items-center">
                        {authorName}
                    </div>
                    <div className="flex justify-center items-center pl-2">
                        <Circle />
                    </div>
                    <div className="font-thin pl-2 text-slate-500 text-sm flex justify-center items-center">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">{title}</div>
                <div className="text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 font-thin text-sm pt-4">{`${Math.ceil(
                    content.length / 700
                )} minute(s) read`}</div>
            </div>
        </Link>
    );
};

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
    name,
    size = "small",
}: {
    name: string;
    size?: "small" | "big";
}) {
    return (
        <div
            className={`relative inline-flex items-center justify-center ${
                size === "small" ? "w-6 h-6" : "w-10 h-10"
            } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
        >
            <span
                className={`font-mediuem ${
                    size === "small" ? "text-xs" : "text-md"
                } text-gray-600 dark:text-gray-300`}
            >
                {name[0]}
            </span>
        </div>
    );
}

export default BlogCard;

import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }: { blog?: Blog }) => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-12 px-12 w-full max-w-screen-xl pt-12">
                    <div className="col-span-8">
                        <div className="text-3xl font-extrabold">
                            {blog?.title}
                        </div>
                        <div className="text-slate-400 pt-2">
                            Posted on 2nd December 2024
                        </div>
                        <div className="pt-4">{blog?.content}</div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-950 text-lg">Author</div>
                        <div className="flex w-full">
                            <div className="pr-4 flex items-center">
                                <Avatar size="big" name="Anonymous" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog?.author?.name || "Anonymous"}
                                </div>
                                <div className="text-slate-500">
                                    Random catch phrase about the author of the
                                    blog.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullBlog;

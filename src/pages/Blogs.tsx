import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import { useBlogs } from "../hooks";

const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-[80vh]">
                <Loader />
            </div>
        );
    }
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2 March 2014"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;

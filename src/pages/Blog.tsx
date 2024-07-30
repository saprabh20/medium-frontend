import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";

const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || "",
    });
    if (loading || !blog) {
        return (
            <div className="flex justify-center items-center w-full h-[80vh]">
                <Loader />
            </div>
        );
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
};

export default Blog;

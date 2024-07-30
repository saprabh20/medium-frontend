import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";

const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full">
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        type="text"
                        className="focus:outline-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                        placeholder="Title"
                    />
                    <TextEditor
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />

                    <button
                        type="button"
                        onClick={async () => {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                title,
                                content,
                            }, {
                                headers: {
                                    Authorization: localStorage.getItem("token"),
                                },
                            });
                            navigate(`/blog/${response.data.id}`);
                        }}
                        className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};

function TextEditor({
    onChange,
}: {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
    return (
        <div>
            <div className="flex justify-center w-full pt-8 pb-8">
                <div className="max-w-screen-lg w-full">
                    <textarea
                        onChange={onChange}
                        className="focus:outline-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                        placeholder="Write your blog here..."
                        rows={18}
                    />
                </div>
            </div>
        </div>
    );
}

export default Publish;

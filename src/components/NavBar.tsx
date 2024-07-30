import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const NavBar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link
                to={"/blogs"}
                className="flex justify-center items-center cursor-pointer"
            >
                Medium
            </Link>
            {localStorage.getItem("token") ? (
                <div>
                    <Link to={"/publish"}>
                        <button
                            type="button"
                            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Create Post
                        </button>
                    </Link>
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="rounded-full"
                        type="button"
                    >
                        <Avatar name="S" size="big" />
                    </button>
                    <div
                        id={"dropdown"}
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 hover:bg-gray-100"
                    >
                        <ul
                            className="py-2 text-sm text-gray-700"
                            aria-labelledby="dropdownDefaultButton"
                        >
                            <li>
                                <Link
                                    to={"/signin"}
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                    }}
                                    className="block px-4 py-2"
                                >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default NavBar;

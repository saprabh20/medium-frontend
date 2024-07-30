import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./pages/Blogs";
import NavBar from "./components/NavBar";
import Publish from "./pages/Publish";

const App = () => {
    const auth = localStorage.getItem("token");
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {auth ? (
                        <>
                            <Route path="/blog/:id" element={<Blog />} />
                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/publish" element={<Publish />} />
                            <Route path="*" element={<Navigate to="/blogs" />} />
                        </>
                    ) : (
                        <>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="*" element={<Navigate to="/signup" />} />
                        </>
                    )}
                    {/* <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/publish" element={<Publish />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

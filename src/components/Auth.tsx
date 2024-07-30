import { SignupInput } from "@saprabh20/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Bounce, toast } from "react-toastify";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "name",
        username: "username",
        password: "password",
    });

    async function SendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${ type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            if(response){
                toast.success("Success!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }
        catch(e){
            toast.error("Error Occured!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.error(e);
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            {type === "signin"
                                ? "Login into account"
                                : "Create an account"}
                        </div>
                        <div className="text-slate-400 text-center">
                            {type === "signin"
                                ? "Don't have an account?"
                                : "Already have an account?"}
                            <Link
                                className="underline pl-2"
                                to={type === "signin" ? "/signup" : "/signin"}
                            >
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        { type === "signup" ? <LabelledInput
                            label="Name"
                            placeholder="John Doe"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value,
                                });
                            }}
                        /> : null}
                        <LabelledInput
                            label="Username"
                            placeholder="example@example.com"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    username: e.target.value,
                                });
                            }}
                            type="email"
                        />
                        <LabelledInput
                            label="Password"
                            placeholder="don't show anyone"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value,
                                });
                            }}
                            type="password"
                        />
                        <button
                            type="button"
                            onClick={SendRequest}
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-8 w-full"
                        >
                            {type === "signup" ? "Sign up" : "Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelledInput({
    label,
    placeholder,
    onChange,
    type,
}: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 pt-4">
                {label}
            </label>
            <input
                type={type || "text"}
                id="input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
                onChange={onChange}
            />
        </div>
    );
}

export default Auth;

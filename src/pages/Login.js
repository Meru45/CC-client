import React, { useState } from "react";
import axios from "axios";

const Login = ({ loginData }) => {
    const [credentials, setCredentials] = useState({
        userId: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const [accessToken, setAccessToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:4000/auth/login", //change this in production
                credentials
            );
            console.log(response);

            if (response.status === 200) {
                const data = response.data;
                await setAccessToken(data.accessToken);
                await setIsLoggedIn(data.userLoggedIn);
                await setUserInfo(data.userInfo);
                loginData(accessToken, isLoggedIn, userInfo);
            } else {
                console.error("Login failed");
                setMessage("No matching user id or password");
                setCredentials({ userId: "", password: "" });
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <div className="mb-4">
                    <label
                        htmlFor="userId"
                        className="block text-sm font-medium text-gray-600"
                    >
                        User ID or Email
                    </label>
                    <input
                        type="email"
                        id="userId"
                        name="userId"
                        value={credentials.userId}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                {message && <div>{message}</div>}
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white p-2 rounded-md"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;

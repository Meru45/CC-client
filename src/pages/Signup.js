import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [userData, setUserData] = useState({
        userID: "",
        userEmail: "",
        userName: "",
        userPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Automatically set userID to userEmail when userEmail changes
        if (name === "userEmail") {
            setUserData((prevData) => ({
                ...prevData,
                userID: value,
            }));
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make POST request using Axios
            console.log(userData);
            const response = await axios.post(
                "http://localhost:4000/auth/singup",
                {
                    headers: { "Content-Type": "application/json" },
                },
                JSON.stringify({
                    userID: userData.userID,
                    userEmail: userData.userEmail,
                    userName: userData.userName,
                    userPassword: userData.userPassword,
                })
            );

            // Handle successful response (you can customize this based on your API)
            console.log(response.data);
        } catch (error) {
            // Handle error (you can customize this based on your API)
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="userEmail"
                        className="block text-sm font-medium text-gray-600"
                    >
                        User Email:
                    </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={userData.userEmail}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="userName"
                        className="block text-sm font-medium text-gray-600"
                    >
                        User Name:
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="userPassword"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Password:
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="userPassword"
                            name="userPassword"
                            value={userData.userPassword}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                        >
                            {showPassword ? "👁️" : "👁️‍🗨️"}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;

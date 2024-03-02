// Import necessary libraries
import React, { useState } from "react";
import axios from "axios";
import useNavigation from "../hooks/use-navigation";

const SignupPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
        useState(false);

    const { navigate } = useNavigation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const userData = {
            userName: fullName,
            userId: email,
            userEmail: email,
            userPassword: password,
        };
        try {
            const response = await axios.post(
                "http://localhost:4000/auth/singup",
                userData
            );
            if (response) {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    const togglePasswordVisibility = (field) => {
        if (field === "password") {
            setPasswordVisibility(!passwordVisibility);
        } else if (field === "confirmPassword") {
            setConfirmPasswordVisibility(!confirmPasswordVisibility);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <form className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-md">
                <div className="mb-4">
                    <label
                        htmlFor="fullName"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full p-2 border rounded"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4 relative">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type={passwordVisibility ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("password")}
                        className="absolute right-2 top-2 text-gray-600"
                    >
                        {passwordVisibility ? (
                            <i className="far fa-eye"></i>
                        ) : (
                            <i className="far fa-eye-slash"></i>
                        )}
                    </button>
                </div>

                <div className="mb-4 relative">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type={confirmPasswordVisibility ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full p-2 border rounded"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                        }
                        className="absolute right-2 top-2 text-gray-600"
                    >
                        {confirmPasswordVisibility ? (
                            <i className="far fa-eye"></i>
                        ) : (
                            <i className="far fa-eye-slash"></i>
                        )}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupPage;

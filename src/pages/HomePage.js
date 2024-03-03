import React from "react";
import Link from "../components/Link";

const HomePage = () => {
    return (
        <div>
            <div className="bg-gray-100 h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-6">
                        Doctor AI Reports
                    </h1>
                    <Link to="/login" className="text-blue-500 underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

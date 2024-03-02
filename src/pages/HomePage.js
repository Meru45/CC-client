import React from "react";
import Link from "../components/Link";

const HomePage = () => {
    const handleClick = () => {
        console.log("Button Clicked");
    };
    return (
        <div>
            <div className="text-center">
                <h1>Doctor AI Reports</h1>
            </div>
            <Link
                to="/singup"
                key="SingUp"
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                Singup
            </Link>
            <Link
                to="/login"
                key="Login"
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                Login
            </Link>
        </div>
    );
};

export default HomePage;

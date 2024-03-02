import React from "react";
import Button from "../components/Button";

const HomePage = () => {
    const handleClick = () => {
        console.log("Button Clicked");
    };
    return (
        <div>
            <div className="text-center">
                <h1>Doctor AI Reports</h1>
            </div>
            <Button onClick={handleClick}>Login</Button>
        </div>
    );
};

export default HomePage;

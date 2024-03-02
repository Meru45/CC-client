import React, { useState } from "react";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import RecordsPage from "./pages/Records";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/singup";
import Login from "./pages/Login";

const App = () => {
    const [accessToken, setAccessToken] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const loginData = (accessToken, loggedIn) => {
        setAccessToken(accessToken);
        setLoggedIn(loggedIn);
    };

    return (
        <div>
            {loggedIn ? (
                <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
                    <SideBar />{" "}
                    <div className="col-span-5">
                        <Route path="/records">
                            <RecordsPage />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </div>
                </div>
            ) : (
                <div>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="/singup">
                        <SignupPage />
                    </Route>
                    <Route path="/login">
                        <Login loginData={loginData} />
                    </Route>
                </div>
            )}
        </div>
    );
};

export default App;

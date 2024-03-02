import React, { useState } from "react";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import RecordsPage from "./pages/Records";
import Dashboard from "./pages/Dashboard";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(true);
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
                <HomePage />
            )}
        </div>
    );
};

export default App;

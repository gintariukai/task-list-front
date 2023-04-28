import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";

import Routes from "routes";
import TopBar from "components/topBar";
import CurrentUserChecker from "components/currentUserChecker";
import {CurrentUserProvider} from "contexts/currentUser";

const App = () => {

    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <TopBar/>
                    <Routes/>
                </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

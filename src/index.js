import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

import {CurrentUserProvider} from "contexts/currentUser";
import Routes from "pages/routes";
import TopBar from "components/topBar";
import CurrentUserChecker from "components/currentUserChecker";

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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import {CurrentUserProvider} from "contexts/currentUser";
import Routes from "pages/routes";
import TopBar from "components/topBar";

const App = ()  => {
    return (
        <CurrentUserProvider>
            <Router>
                <TopBar />
                <Routes />
            </Router>
        </CurrentUserProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App/>
);

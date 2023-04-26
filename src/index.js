import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalFeed from "pages/globalFeed";
import Article from "pages/article";
import TopBar from "components/topBar";


const App = () => {
    return (
        <div>
            <h3>Welcome</h3>
            <Router>
                <TopBar/>
                <Routes>
                    <Route path="/" element={<GlobalFeed />} exact />
                    <Route path="/article/:slug" element={<Article />} />
                </Routes>
            </Router>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

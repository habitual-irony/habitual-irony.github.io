import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppSidebar, AppHeader, AppContent,AppFooter } from './Layout/index';

const PrivateRouter = ({ component: Component, ...rest }) => {
    const isLoggedIn = localStorage.getItem("key");

    return isLoggedIn != null ?
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1">
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>
        : <Navigate to="/login" />;
};

export default PrivateRouter;

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, userLoading } = useAuth();

    if (userLoading) {
    return <div>Loading...</div>; // Du kan byta till spinner eller skeleton senare
    }

    if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute
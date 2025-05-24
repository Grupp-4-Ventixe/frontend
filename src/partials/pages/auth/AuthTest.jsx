import React from "react";
import { useAuth } from '../../../contexts/AuthContext'

const AuthTest = () => {
    const { isAuthenticated, isAdmin, user } = useAuth();

    console.log("AuthTest - Authenticated:", isAuthenticated);
    console.log("AuthTest - Admin:", isAdmin);
    console.log("AuthTest - User:", user);

    return (
        <div>
            <h1>Auth State Test</h1>
            <p><strong>Is Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}</p>
            <p><strong>Is Admin:</strong> {isAdmin ? "Yes" : "No"}</p>
            {user ? (
                <div>
                    <p><strong>User Email:</strong> {user.email}</p>
                    <p><strong>User Name:</strong> {user.name}</p>
                    <p><strong>User Role:</strong> {user.role}</p>
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default AuthTest;
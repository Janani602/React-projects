// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) => {
        console.log("User logged in:", { email, password });
        setIsAuthenticated(true); // Set as authenticated after login
    };

    const logout = () => {
        setIsAuthenticated(false);
        console.log("User logged out");
    };

    const signup = (name, email, password) => {
        console.log("User signed up:", { name, email, password });
        setIsAuthenticated(true); // Optionally, set as authenticated after signup
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

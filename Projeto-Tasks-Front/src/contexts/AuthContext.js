// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { login } from "../services/taskService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = async ({ email, password }) => {
        const response = await login({ email, password });
        const data = response.data;
        setUser(data.email);
        setToken(data.token);
        return response.data;
    };

    const logout = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ user, token, handleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

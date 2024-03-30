// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    const login = (email, password) => {
        // Aqui, faça a chamada de login à sua API e salve o token retornado
        // Exemplo:
        // const response = await suaFuncaoDeLogin(email, password);
        // setToken(response.token);
        // setUser({ ... });
    };

    const logout = () => {
        setUser(null);
        setToken('');
        // Limpe o token armazenado localmente se estiver usando localStorage ou sessionStorage
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

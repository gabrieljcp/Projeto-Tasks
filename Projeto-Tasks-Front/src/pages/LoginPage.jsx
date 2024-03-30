import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
//import './LoginPage.css';
import { login } from "../services/taskService";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate  = useNavigate(); // Para navegação
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(login, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Login bem-sucedido:', data);
          // Redirecionar para a página principal após o login
          navigate.push('/home');
        } else {
          console.error('Falha no login');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    };
  
    const navigateToRegister = () => {
      // Redirecionar para a tela de cadastro
      navigate.push('/register');
    };
  
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
          <button onClick={navigateToRegister}>Cadastrar</button>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
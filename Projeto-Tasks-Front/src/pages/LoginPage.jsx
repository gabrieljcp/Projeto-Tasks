import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/LoginPage.css';
import { login } from "../services/taskService";
import LoadingIndicator from '../components/LoadingIndicator';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await login({ email, password });
        if (response.data && response.data.token) {
            console.log('Login bem-sucedido:', response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/tasks');
        } else {
          console.error('Falha no login');
          setError(true);
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
  
    const navigateToRegister = () => {
      navigate('/register'); 
    };
  
    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <div className="container">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="center">
                <h1><strong>TASKS</strong></h1>
                <p>Gerenciador de tarefas</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                />
                {error && <p className="error-message">Credenciais Inválidas</p>}
                <br />
                <button onClick={handleLogin}>
                    Entrar
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
                </button>
                <br />
                <button onClick={navigateToRegister}>
                    Cadastrar
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
                </button>
            </div>
        </div>
    );
};
  
export default LoginPage;

import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/LoginPage.css';
import { login } from "../services/taskService";
import LoadingIndicator from '../components/LoadingIndicator';
import { useAuth } from "../contexts/AuthContext";

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogin = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await auth.handleLogin({ email, password });
        if (response.token) {
          localStorage.setItem('token', response.token);
          const email = response.email;
          const containsAdmin = email.split('@')[1].startsWith('admin');  
            if(containsAdmin) {
              navigate('/tasks/admin');
            } else {
              navigate('/tasks');
            }
            navigate('/tasks');
        } else {
          setError(true);
        }
      } catch (error) {
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
      <div className="loginPage">
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
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
                <br />
                <button onClick={navigateToRegister}>
                    Cadastrar
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
            </div>
        </div>
      </div>
    );
};
  
export default LoginPage;

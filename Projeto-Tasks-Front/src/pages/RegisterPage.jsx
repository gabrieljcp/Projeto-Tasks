import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';
import { register } from "../services/taskService";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');

    const navigate = useNavigate();
  
    const onButtonClick = async () => {
      try {
        const response = await register({ name, email, password, password_confirmation });
        if (response.data) {
          console.log('Registro bem-sucedido:', response.data);
          navigate('/tasks');
        } else {
          console.error('Falha no registro');
        }
      } catch (error) {
        console.error('Erro ao fazer registro:', error);
      }
    };
  
    return (
        <div className="container">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="center">
                <h2>Faça seu cadastro</h2>
                <input 
                    type="text"     
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="email"     
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password"     
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="password"     
                    placeholder="Confirme sua senha"
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)} 
                />
                <br />
                <button onClick={onButtonClick}>
                    Cadastrar
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
                </button>
            </div>
        </div>
    );
};
  
export default RegisterPage;

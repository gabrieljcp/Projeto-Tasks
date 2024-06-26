import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';
import { register } from "../services/taskService";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [erro, setErro] = useState(false);

    const navigate = useNavigate();
  
    const onButtonClick = async () => {
      try {
        const response = await register({ name, email, password, password_confirmation });
        if (response.data) {
          console.log('Registro bem-sucedido:', response.data);
          navigate('/tasks');
        } else {
          setErro(true);
          console.error('Falha no registro');
        }
      } catch (error) {
        setErro(true);
        console.error('Erro ao fazer registro:', error);
      }
    };
  
    return (
        <div className="registerPage">
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
                  {erro && <p className="error-message">As informações fornecidas estão incorretas.</p>}
                  <button onClick={onButtonClick}>
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
  
export default RegisterPage;

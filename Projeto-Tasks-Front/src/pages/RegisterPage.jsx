import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/RegisterPage.css';
import { login } from "../services/taskService";

const RegisterPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        // You'll update this function later...
    }
  
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
      navigate('/register');
    };
  
    return (
        <div class="container" onclick="handleClick()">
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="center">
                <h2>Crie seu cadastro</h2>
                <input type="text" placeholder="Nome"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Senha"></input>
                <br />
                <input type="button" onClick={onButtonClick} value={'Criar'} />
            </div>
        </div>

        // <div className={'container'}>
        //     <div className={'titleContainer'}>
        //         <p>Login</p>
        //     </div>
        //     <br />
        //     <div className={'inputContainer'}>
        //         <input
        //         value={email}
        //         placeholder="Enter your email here"
        //         onChange={(ev) => setEmail(ev.target.value)}
        //         className={'inputBox'}
        //         />
        //         <label className="errorLabel">{emailError}</label>
        //     </div>
        //     <br />
        //     <div className={'inputContainer'}>
        //         <input
        //         value={password}
        //         placeholder="Enter your password here"
        //         onChange={(ev) => setPassword(ev.target.value)}
        //         className={'inputBox'}
        //         />
        //         <label className="errorLabel">{passwordError}</label>
        //     </div>
        //     <br />
        //     <div className={'inputContainer'}>
        //         <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        //     </div>
        // </div>
    //   <div className="login-container">
    //     <div className="login-card">
    //       <h1>Login</h1>
    //       <form onSubmit={handleLogin}>
    //         <input
    //           type="email"
    //           placeholder="E-mail"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <input
    //           type="password"
    //           placeholder="Senha"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <button type="submit">Entrar</button>
    //       </form>
    //       <button onClick={navigateToRegister}>Cadastrar</button>
    //     </div>
    //   </div>
    );
  };
  
  export default RegisterPage;
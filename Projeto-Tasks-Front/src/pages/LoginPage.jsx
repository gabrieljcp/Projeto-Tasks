import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/LoginPage.css';
import { login } from "../services/taskService";

const LoginPage = (props) => {
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
        console.log(email)
        const response = await login({ email, password });
        console.log(response);
        if (response.data && response.data.token) {
            console.log('Login bem-sucedido:', response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/tasks');
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
                <br />
                <input type="button" onClick={handleLogin} value={'Entrar'} />
                <input type="button" onClick={navigateToRegister} value={'Cadastrar'} />
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
  
  export default LoginPage;
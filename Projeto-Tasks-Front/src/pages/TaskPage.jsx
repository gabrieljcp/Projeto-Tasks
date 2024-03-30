import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/TaskPage.css';
import { login } from "../services/taskService";

const TaskPage = (props) => {
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
        <div class="container">
            <h1>Suas Tarefas</h1>
            <br />
            <div class="cards">
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
            </div>    
        </div>
    );
  };

export default TaskPage;
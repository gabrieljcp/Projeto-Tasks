import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/TaskPage.css';

const TaskPage = (props) => {
    const navigate = useNavigate()
  
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
import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/TaskPage.css';

const TaskPage = (props) => {
    const navigate = useNavigate()
  
    return (
        <div className="container">
            <h1>Suas Tarefas</h1>
            <br />
            <div className="cards">
                <div className="card">
                    <div className="card-details">
                        <p className="text-title">Card title</p>
                        <p className="text-body">Here are the details of the card</p>
                    </div>
                    <button className="card-button">More info</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <p className="text-title">Card title</p>
                        <p className="text-body">Here are the details of the card</p>
                    </div>
                    <button className="card-button">More info</button>
                </div>
                <div className="card">
                    <div className="card-details">
                        <p className="text-title">Card title</p>
                        <p className="text-body">Here are the details of the card</p>
                    </div>
                    <button className="card-button">More info</button>
                </div>
            </div>    
        </div>
    );
  };

export default TaskPage;
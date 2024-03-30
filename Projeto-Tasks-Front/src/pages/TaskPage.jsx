import React, { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/TaskPage.css';
import { getAllTasks, fetchWithToken } from "../services/taskService";
import LoadingIndicator from '../components/LoadingIndicator';

const TaskPage = (props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
            
          try {
            const fetchData = async () => {
                const response = await fetch(getAllTasks, { 
                  method: 'GET',
                });
                console.log("ABABA".response)    
            if (response.status === 401) {
              navigate('/login');
              return;
            }
            const data = await response.json();
            console.log(data)
          } 
          } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);
      

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
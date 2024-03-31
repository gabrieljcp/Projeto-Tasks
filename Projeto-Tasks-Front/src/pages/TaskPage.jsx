import React, { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/TaskPage.css';
import { getAllTasks, fetchWithToken } from "../services/taskService";
import LoadingIndicator from '../components/LoadingIndicator';

const TaskPage = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
            
          try {
                const response = await getAllTasks();
                setTasks(response.data);
          } catch (error) {
            setError(error);
            if (error.response && error.response.status === 401) {
              navigate('/login');
            }
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);

      if (isLoading) return <LoadingIndicator />;
      
      return (
        <div className="container">
          <header className="box-title">
            <h1 className="the-title"><b>Suas tarefas</b></h1>
          </header>
          <br />
          <div className="cards">
            {tasks.map((task) => (
              <div key={task.id} className="card">
                <div className="card-details">
                  <p className="text-title">{task.title}</p>
                  <p className="text-body">{task.description}</p> 
                  <p className="text-body">Status: {task.status}</p> 
                </div>
                <button className="card-button">Mais informações</button>
              </div>
            ))}
          </div>    
        </div>
      );
    };
    
    export default TaskPage;
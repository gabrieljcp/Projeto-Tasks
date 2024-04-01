import React, { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import '../styles/TaskPage.css';
import { getAllTasks, updateTasks} from "../services/taskService";
import LoadingIndicator from '../components/LoadingIndicator';
import Card from "../components/TasksCard";
import AddCard from "../components/AddCard";
import Header from "../components/Header";

const TaskPage = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState('');
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    if (error && error.response && error.response.status !== 401) {
      return <p>Ocorreu um erro ao buscar as tarefas. Tente novamente mais tarde.</p>;
    }
      
    const handleShowMore = (currentTask) => {
      setActiveTaskId(currentTask);
    };
    
  return (
    <div className="taskpage">
      <Header />
      <div className="container">
        <div className="cards">
            <AddCard /> 
          {tasks.map((task) => (              
            <Card 
              key={task.id} 
              task={task}
              handleShowMore={handleShowMore}
              currentTask={activeTaskId}
            />  
          ))}
        </div>
      </div>
    </div>
  );
};
    
    export default TaskPage;
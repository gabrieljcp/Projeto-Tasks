import React, { useState } from "react";
import { deleteTasks, updateTasks} from "../services/taskService";
import { useNavigate  } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';

const Card = ({ task, onTaskUpdate, handleShowMore, currentTask }) => {

  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [editValues, setEditValues] = useState({
    title: task.title,
    description: task.description,
    status: task.status
  });

  const toggleShowMore = () => {
    setShowMore(currentTask === task.id);
    handleShowMore(task.id)
  };
  const toggleEdit = () => setIsEditing(!isEditing);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('pt-BR', options).format(new Date(dateString));
  };

  const Delete = async (id) => {
    setIsLoading(true);
    try {
        const response = await deleteTasks(id);
        window.location.reload();
    } catch (error) {
      setError(error);
      if (error.response && error.response.status === 401) {
        setError(error.response)
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateTasks(task.id, editValues);
      onTaskUpdate(); // Callback to refresh the task list in the parent component
      toggleEdit(); // Exit editing mode
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`card ${currentTask === task.id ? 'card-active' : ''}`} onClick={toggleShowMore}>
      {isEditing ? (
        <div className="card-details">
            <input className="text-title" name="title" value={editValues.title} onChange={handleChange} />
            <textarea className="text-body" name="description" value={editValues.description} onChange={handleChange} />
            <input className="text-body" name="status" value={editValues.status} onChange={handleChange} />
            <div className="editTask">
              <button onClick={toggleEdit}>Cancelar</button>
              <button className="saveButton" onClick={handleUpdate}>Salvar</button>
            </div>
        </div>
      ) : (
        <>
        <div className="card-details">
          <p className="text-title">{task.title}</p>
          <p className="text-body">{task.description}</p>
          <p className="text-body">Status: {task.status}</p>
          {showMore && (
            <div className="text-extra">
              <p className="text-body">Criado: {formatDate(task.created_at)}</p>
            </div>
          )}
        </div>
        <div className="card-actions">
          <div className="button-group">
            <button
              className="delete-button"
              onClick={() => Delete(task.id)}
              aria-label="Delete task"
              >
              <i className="fas fa-trash-alt"></i>
            {error ? <p style={{color: 'red'}}>Erro ao excluir</p> : null}
            </button>
            <button
              className="edit-button"
              onClick={() => toggleEdit()}
              aria-label="Edit task"
              >
              <i className="fas fa-edit"></i>
              {error ? <p style={{color: 'red'}}>Erro ao editar</p> : null}
            </button>
          </div>
        </div>
      </>
      )} 
    </div>
  );
};

export default Card;

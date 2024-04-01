import React, { useState } from "react";
import { createTasks } from "../services/taskService";
import { useAuth } from "../contexts/AuthContext";
import '../styles/components/addCard.css';

const AddCard = () => {
    const [newValues, setNewValues] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const auth = useAuth();

    const createTask = async () => {
        const task = {...newValues};
        task.criadopor = auth.user;
        console.log(task);

        try {
            const response = await createTasks(task);
            window.location.reload();

        } catch (error) {

            if (error.response && error.response.status === 401) {

            }
        } finally {
            setIsEditing(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewValues(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={`card`}>
            <div className="card-details">
                {isEditing ? (
                    <>
                    <input className="text-title" name="title" value={newValues.title} onChange={handleChange} />
                    <textarea className="text-body" name="description" value={newValues.description} onChange={handleChange} />
                    <input className="text-body" name="status" value={newValues.status} onChange={handleChange} />
                    <div className="editTask">
                        <button onClick={() => setIsEditing(false)}>Cancelar</button>
                    <button className="saveButton" onClick={createTask}>Criar</button>
                    </div>
                    </>
                ) : (
                    <div className="newButton" onClick={() => setIsEditing(true)}>
                        <i className="fas fa-plus addIcon"></i>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddCard;

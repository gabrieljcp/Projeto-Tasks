import React, { useState } from 'react';
import '../styles/TaskPage.css';

function EditableCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [cardValues, setCardValues] = useState({
    title: 'Card title',
    details: 'Here are the details of the card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="card">
      <div className="card-details">
        {isEditing ? (
          <>
            <input
              type="text"
              className="text-title"
              name="title"
              value={cardValues.title}
              onChange={handleChange}
            />
            <textarea
              className="text-body"
              name="details"
              value={cardValues.details}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <p className="text-title">{cardValues.title}</p>
            <p className="text-body">{cardValues.details}</p>
          </>
        )}
      </div>
      {isEditing ? (
        <button className="card-button" onClick={toggleEdit}>Save</button>
      ) : (
        <button className="card-button" onClick={toggleEdit}>Edit</button>
      )}
    </div>
  );
}

export default EditableCard;

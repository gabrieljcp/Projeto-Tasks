import React, { useState } from "react";

const Card = ({ task }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title">{task.title}</p>
        <p className="text-body">{task.description}</p>
        {showMore && (
          <div className="text-extra">
            <p>Detalhes extras da tarefa aqui...</p>
          </div>
        )}
      </div>
      <button className="card-button" onClick={toggleShowMore}>
        {showMore ? "Menos informações" : "Mais informações"}
      </button>
    </div>
  );
};

export default Card;

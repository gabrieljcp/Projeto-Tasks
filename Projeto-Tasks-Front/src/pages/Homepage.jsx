import React from 'react';

// Componente de tarefa individual
const Task = ({ task, toggleTask }) => (
  <div onClick={() => toggleTask(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
    {task.text}
  </div>
);

// Componente da lista de tarefas
const TaskList = ({ tasks, toggleTask }) => (
  <div>
    {tasks.map(task => (
      <Task key={task.id} task={task} toggleTask={toggleTask} />
    ))}
  </div>
);

// Componente principal da homepage
const HomePage = () => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = React.useState([
    { id: 1, text: 'Tarefa 1', completed: false },
    { id: 2, text: 'Tarefa 2', completed: false },
    // Adicione mais tarefas aqui
  ]);

  // Função para alternar a conclusão da tarefa
  const toggleTask = taskId => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="homepage">
      <h1>Minhas Tarefas</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
      {/* Adicione mais componentes conforme necessário */}
    </div>
  );
};

export default HomePage;
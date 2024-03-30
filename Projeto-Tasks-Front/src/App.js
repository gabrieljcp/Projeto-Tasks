import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import TaskPage from './pages/TaskPage';
import LoginPage from './pages/LoginPage';
// Outras importações de páginas...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}

export default App;

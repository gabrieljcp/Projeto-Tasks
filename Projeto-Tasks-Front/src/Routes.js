import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import EditTaskPage from './pages/EditTaskPage';
import AdminPage from './pages/AdminPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/tasks" element={<PrivateRoute><TaskPage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks/editar" element={<PrivateRoute><EditTaskPage /></PrivateRoute>} />
        <Route path="/tasks/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

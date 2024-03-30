import React from 'react';
import '../styles/LoadingIndicator.css';

const LoadingIndicator = () => (
  <div class="spinner-container">
    <svg viewBox="25 25 50 50" class="spinner">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>

);

export default LoadingIndicator;

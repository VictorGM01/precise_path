import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.jsx';
import './styles/reset.scss';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);

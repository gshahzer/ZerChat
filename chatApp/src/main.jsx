import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';
import { SocketContextProvider } from './context/SocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
      <Router>
        <App />
        <Toaster/>
      </Router>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);

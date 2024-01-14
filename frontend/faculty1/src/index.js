import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const root = document.getElementById('root');

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);

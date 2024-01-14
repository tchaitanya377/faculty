import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Router } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import PrivateRoute from './utils/PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          </Route>
        </Route >
    </>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


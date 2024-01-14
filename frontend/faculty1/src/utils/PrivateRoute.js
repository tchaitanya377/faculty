import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = false; 
  return (
    isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
  );
};

export default PrivateRoute;

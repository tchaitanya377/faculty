import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'chai' }}>
      {children}
    </AuthContext.Provider>
  );
};

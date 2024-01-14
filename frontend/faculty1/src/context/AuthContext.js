import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";


const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ()=>{
    return(
        <AuthContext.Provider value={{'name':'chai'}} >
       <Outlet/>
        </AuthContext.Provider>
    )
}
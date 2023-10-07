import { createContext, useState } from "react";

export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState('')


    const authInfo = {user}
    return (
        <authContex.Provider >
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;
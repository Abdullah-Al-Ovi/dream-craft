import { createContext } from "react";

export const authContex = createContext(null)
const AuthProvider = ({children}) => {
    return (
        <authContex.Provider >
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;
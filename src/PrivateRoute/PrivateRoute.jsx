import { useContext } from "react";
import { authContex } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   let {user,loading}=useContext(authContex)
   const location = useLocation()
   console.log(children);

   if(loading){
      return <div className="h-[60vh] flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
   }

   if(!user){
      return <Navigate state={location.pathname} to='/sign-in'></Navigate>
   }
   return children
 
};

export default PrivateRoute;
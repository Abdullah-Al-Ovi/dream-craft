import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SIgnIn from "../Pages/SignIn/SIgnIn";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/sign-in',
                element:<SIgnIn></SIgnIn>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SIgnIn from "../Pages/SignIn/SIgnIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Career from "../Pages/Career/Career";
import Booking from "../Pages/Booking/Booking";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch('/eventdata.json'),
                element:<Home></Home>
            },
            {
                path:'/sign-in',
                element:<SIgnIn></SIgnIn>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/service/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:()=>fetch('/eventdata.json')
            },
            {
                path:'/career',
                loader:()=>fetch('/careers.json'),
                element:<PrivateRoute><Career></Career></PrivateRoute>
            },
            {
                path:'/booking',
                element:<PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    }
])

export default router;
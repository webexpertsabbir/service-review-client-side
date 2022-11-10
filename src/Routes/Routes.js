import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import LogIn from "../components/LogIn/LogIn";
import Service from "../components/Service/Service";
import SignUp from "../components/SignUp/SignUp";
import Home from "../Home/Home";
import Main from "../layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;
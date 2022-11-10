import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import LogIn from "../components/LogIn/LogIn";
import MyReviews from "../components/MyReviews/MyReviews";
import Service from "../components/Service/Service";
import SingelService from "../components/Service/SingelService";
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
                path: '/services',
                element: <Service></Service>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/service/:id',
                element: <SingelService></SingelService>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router;
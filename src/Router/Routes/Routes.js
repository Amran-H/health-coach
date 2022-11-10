import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddReview from "../../Pages/Home/AddReview/AddReview";
import Review from "../../Pages/Home/AddReview/Review";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetailsCard from "../../Pages/Home/Services/ServiceDetailsCard";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsCard></ServiceDetailsCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addreview',
                element: <AddReview></AddReview>,
                // loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review',
                element: <Review></Review>

            },
        ]
    }
]);

export default router;
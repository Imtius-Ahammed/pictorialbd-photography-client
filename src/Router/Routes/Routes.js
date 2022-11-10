import Main from "../../Layouts/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import UserServices from "../../Pages/Home/Home/UserServices";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews/MyReviews";
import ReviewUpdate from "../../Pages/MyReviews/ReviewUpdate/ReviewUpdate";

import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch(`http://localhost:5000/services`)
      },
      {
        path:'/services',
        element:<Services></Services>,
        loader:()=> fetch(`http://localhost:5000/allservices`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    
      {
        path:'/register',
        element:<Register></Register>

      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/myreviews',
        element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<ReviewUpdate></ReviewUpdate>,
        loader:({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)

      },
      {
        path:'/addservices',
        element:<PrivateRoute><AddServices></AddServices></PrivateRoute>,
        loader:()=> fetch(`http://localhost:5000/allservices`)
      },
      {
        path:'/serviceDetails/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:({params})=> fetch(`http://localhost:5000/allservices/${params.id}`)
      }
     
    ]
  }
]);
export default router;
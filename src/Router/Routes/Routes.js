import Main from "../../Layouts/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
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
        loader:()=> fetch(`http://localhost:5000/services`)
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
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:'/myreviews',
        element:<MyReviews></MyReviews>
      },
      {
        path:'/addservices',
        element:<AddServices></AddServices>
      },
      {
        path:'/serviceDetails/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  }
]);
export default router;
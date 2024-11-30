import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Details from "../components/Details";
import ErrorPage from "../components/ErrorPage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/coffee')
        },
        {
          path: '/addCoffee',
          element: <AddCoffee></AddCoffee>
        },
        {
          path: '/updateCoffee/:id',
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/users',
          element: <Users></Users>,
          loader: () => fetch('http://localhost:5000/users')
        }
      ]
    },
  ]);

  export default router;
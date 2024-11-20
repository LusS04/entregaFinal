import { createBrowserRouter } from "react-router-dom";
import Login from '../views/Login.jsx';
import SingUp from '../views/SingUp.jsx';
import DetalleProducto from '../views/DetalleProducto.jsx';
import Home from '../views/Home.jsx';
import ErrorPage from '../views/ErrorPage.jsx'; 

export const router = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "Login", element: <Login/> },
    { path: "Singup", element: <SingUp/> },
    { path: "/DetalleProducto/:id", element: <DetalleProducto/> },
    { path: "*", element: <ErrorPage/> } 
]);

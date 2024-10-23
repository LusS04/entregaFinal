import { createBrowserRouter } from "react-router-dom";
import Login from '../Login.jsx';
import SingUp from '../SingUp.jsx';
import DetalleProducto from '../DetalleProducto.jsx';
import Home from '../Home.jsx';
import ErrorPage from '../ErrorPage.jsx'; 

export const router = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "Login", element: <Login/> },
    { path: "Singup", element: <SingUp/> },
    { path: "/DetalleProducto/:id", element: <DetalleProducto/> },
    { path: "*", element: <ErrorPage/> } 
]);

import React from 'react';
import products from './db-products.json'; 
import { useParams } from 'react-router-dom';

function DetalleProducto () {
    let { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id)); // Busca el producto por ID

    // Si no se encuentra el producto, puedes manejarlo como desees (por ejemplo, mostrar un mensaje)
    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    function handleClick(){
        alert("La funcion de compra no se encuentra disponible. Por favor intentelo mas tarde.")
    }

    return (
        <div className="container mt-4">
            <h2>{product.name}</h2>
            <img className="img-fluid col-3" src={product.image} alt={product.name} />
            <div className="mt-3">
                <h5>Descripción:</h5>
                <p>{product.description}</p>
                <h5>Precio:</h5>
                <p>${product.price}</p>
                <button className="btn btn-primary" onClick={handleClick}>Comprar</button>
            </div>
        </div>
    );
};

export default DetalleProducto;

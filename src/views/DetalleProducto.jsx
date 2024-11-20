import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function DetalleProducto() {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(db, 'productos', id);
                const docSnap = await getDoc(productRef);

                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error("Error getting document:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    function handleClick() {
        alert("La función de compra no se encuentra disponible. Por favor intente más tarde.");
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

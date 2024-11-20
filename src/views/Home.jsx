import './Home.css';
import { db } from '../firebase.js';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // Función para obtener los productos desde Firestore
  const obtenerProductos = async () => {
    try {
      const productosRef = collection(db, 'productos'); // Referencia a la colección 'productos'
      const querySnapshot = await getDocs(productosRef); // Obtener los documentos
      const productosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productosData); // Actualiza el estado con los productos obtenidos
    } catch (e) {
      console.error('Error al obtener productos: ', e);
    }
  };

  // Usamos useEffect para obtener los productos al cargar el componente
  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Lista de Productos</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={product.image} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <a href={`/DetalleProducto/${product.id}`} className="btn btn-primary">Ver Más</a>    
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

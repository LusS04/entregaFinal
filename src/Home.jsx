
import products from './db-products.json'; 
import './Home.css'
const Home = () => {
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

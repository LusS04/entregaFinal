import React from 'react';

const ErrorPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <a href="/" className="btn btn-primary">Volver al Inicio</a>
    </div>
  );
};

export default ErrorPage;

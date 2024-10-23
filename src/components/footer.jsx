

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-4 nav-footer-bg">
      <div className="container">
        <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
        <p>
          <a href="/about" className="text-dark">Sobre Nosotros</a> | 
          <a href="/contact" className="text-dark"> Contacto</a> | 
          <a href="/privacy" className="text-dark"> Política de Privacidad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


function Login() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="bg-light p-3 rounded">
        <h2>Iniciar Sesion</h2>
        <form>
            <div>
                <label htmlFor="email">Usuario o Correo Electrónico:</label><br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Contraseña:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </div>

            <div className="mt-3">
                <button type="submit">Iniciar Sesión</button>
            </div>
        </form>
      </div>
    </div>  
  );
}

export default Login

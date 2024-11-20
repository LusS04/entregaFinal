import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Login() {
  async function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let userFound = false;

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        if (user.email === email && user.password === password) {
          userFound = true;
        }
      });

      if (userFound) {
        alert("Inicio de sesión exitoso");
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="bg-light p-3 rounded">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Usuario o Correo Electrónico:</label><br />
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label><br />
            <input type="password" id="password" name="password" required />
          </div>
          <div className="mt-3">
            <button type="submit">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

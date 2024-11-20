import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function SingUp() {
  async function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await addDoc(collection(db, "users"), {
        username: username,
        email: email,
        password: password, // Aunque no es recomendable guardar contraseñas de esta manera
      });
      alert("Registro exitoso");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="bg-light p-3 rounded">
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nombre de Usuario:</label><br />
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label><br />
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label><br />
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label><br />
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div className='mt-3'>
            <input type="submit" value="Registrarse" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingUp;

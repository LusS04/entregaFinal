import React from 'react';

function SingUp() {
    function passwordCheck(event) {      
        if (document.getElementById('password').value !== document.getElementById('confirmPassword').value) {
            event.preventDefault(); 
            alert("Las contraseñas no coinciden");
        } else {
            alert("Registro exitoso");
        }
    }

    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="bg-light p-3 rounded">
                <h2>Registro de Usuario</h2>
                <form onSubmit={passwordCheck}>
                    <div>
                        <label htmlFor="username">Nombre de Usuario:</label><br />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Correo Electrónico:</label><br />
                        <input
                            type="email"
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

                    <div>
                        <label htmlFor="confirmPassword">Confirmar Contraseña:</label><br />
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                        />
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

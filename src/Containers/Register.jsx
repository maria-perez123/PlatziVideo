import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register=()=>(
    <section className="Register">
        <section className="Register_container">
            <h2>Regístrate</h2>
            <form action="" className="Register_container-form">
                <input type="text" className="input" placeholder="Nombre"/>
                <input type="text" className="input" placeholder="Correo"/>
                <input type="text" className="input" placeholder="Contraseña"/>
                <button className="button">Registrarme</button>
            </form>
            <p className="Register_container-register">
                <Link to="/login">Iniciar sesión</Link>
            </p>
        </section>
    </section>
);

export default Register;

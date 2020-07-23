import React from 'react';
import {Link} from 'react-router-dom';
//import googleIcon from '../assets/Statics/nombreimagen';
import '../assets/styles/components/Login.scss';

const Login=()=>(
    <section className="login">
        <section className="login_container">
            <h2>Inicia sesión</h2>
            <form  className="login_container-form">
                <input type="text" className="input" placeholder="Correo" />
                <input type="password" className="input" placeholder="Contraseña" />
                <button className="button">Iniciar sesión</button>
                <div className="login_container-rememberme">
                    <label>
                        <input type="checkbox" id="cbox1" value="checkbox"/>recuerdame
                    </label>
                    <a href="">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="login_container-socialmedia">
                <div><img src="https://img.icons8.com/nolan/64/google-plus.png" alt="google logo" />Inicia sesión con google</div>  
                <div><img src="https://img.icons8.com/nolan/64/twitter-circled.png" alt="twitter logo"/>Inicia sesión con twitter</div>
            </section>
            <p className="login_container-register">No tienes ninguna cuenta 
                <Link to="/register">Registrate</Link>
            </p>
        </section>
    </section>
);

export default Login;
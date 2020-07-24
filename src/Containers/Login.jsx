import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginRequest} from '../actions';
//import googleIcon from '../assets/Statics/nombreimagen';
import '../assets/styles/components/Login.scss';

const Login=props=>{
    
    const [form, setValues]=useState({
        email:'',
    });

    const handleInput=event=>{
        setValues({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=event=>{
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return(
        <section className="login">
            <section className="login_container">
                <h2>Inicia sesión</h2>
                <form  className="login_container-form" onSubmit={handleSubmit}>
                    <input 
                        name="email"
                        type="text" 
                        className="input" 
                        placeholder="Correo"
                        onChange={handleInput} 
                    />
                    <input 
                        name="password"
                        type="password" 
                        className="input" 
                        placeholder="Contraseña"
                        onChange={handleInput}  
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login_container-rememberme">
                        <label>
                            <input 
                                type="checkbox" 
                                id="cbox1" 
                                value="checkbox"
                            />
                            recuerdame
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
}

const mapDispatchToProps={
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);
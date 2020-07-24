import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {registerRequest} from '../actions';
import '../assets/styles/components/Register.scss';
import Header from '../components/Header';

const Register=props=>{

    const [form, setValues] =useState({
        email: '',
        name: '', 
        password: '',
    })

    const handleInput=event=>{
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit=event=>{
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return(
        <>
            <Header isRegister/>
            <section className="Register">
                <section className="Register_container">
                    <h2>Regístrate</h2>
                    <form action="" className="Register_container-form" onSubmit={handleSubmit}>
                        <input 
                            name="name"
                            type="text" 
                            className="input" 
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <input 
                            name="email"
                            type="text" 
                            className="input" 
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input 
                            name="password"
                            type="text" 
                            className="input" 
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button">Registrarme</button>
                    </form>
                    <p className="Register_container-register">
                        <Link to="/login">Iniciar sesión</Link>
                    </p>
                </section>
            </section>
        </>
    );
}

const mapDispatchToProps={
    registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

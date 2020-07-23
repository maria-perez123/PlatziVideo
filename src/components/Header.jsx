import React from 'react';
import '../assets/styles/components/Header.scss';

//import logo '../assets/Statics/nombre_de_imagen';
//señalar src={logo}

const Header = ()=>(
    <header className="header">
        <img className="header_img" src="https://i.imgur.com/FavN9FN.png" alt="logo" />
        <div className="header_menu">
            <div className="header_menu_profile">
                <img src="https://i.imgur.com/opRmWt8.png" alt="User"/>
                <p>Perfil</p>   
            </div>
            <ul>
                <li><a href="">Cuenta</a></li>
                <li><a href="">Cerrar sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;
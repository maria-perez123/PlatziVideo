import React from 'react';
import {connect} from 'react-redux';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import {Link} from 'react-router-dom';

//import logo '../assets/Statics/nombre_de_imagen';
//señalar src={logo}

const Header = props=>{

    const {user}=props;
    //const hasUser=object.keys(user).length>0;

    return(
        <header className="header">
            
            <Link to="/">
                <img className="header_img" src="https://i.imgur.com/FavN9FN.png" alt="logo" />
            </Link>

            <div className="header_menu">
                <div className="header_menu_profile">
                
                    <img src="https://i.imgur.com/opRmWt8.png" alt="User"/>
                
                <p>Perfil</p>   
                </div>
                <ul>
                    <li><a href="">Cuenta</a></li>
                    <li>
                        <Link to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
const mapStateToProps=state=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,null)(Header);

/*
{hasUser?
    <img src={gravatar(user.email)} alt={user.email}/>:
    <img src="https://i.imgur.com/opRmWt8.png" alt="User"/>
}
*/
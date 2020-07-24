import React from 'react';
import {connect} from 'react-redux';
import {logoutRequest} from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

//import logo '../assets/Statics/nombre_de_imagen';
//señalar src={logo}

const Header = props=>{

    //const isNullOrUndefined = (value) => value === null || typeof value === 'undefined' ;
    //const { user } = props;
    //const hasUser = !isNullOrUndefined(user) && Object.keys(user).length  >  0;

    const {user, isLogin, isRegister}=props;
    const hasUser= Object.keys(user).length>0;

    const handleLogout=()=>{
        props.logoutRequest({})
    }

    const HeaderClass= classNames('header', {
        isLogin, 
        isRegister,
    });

    return(
        <header className={HeaderClass}>
            
            <Link to="/">
                <img className="header_img" src="https://i.imgur.com/FavN9FN.png" alt="logo" />
            </Link>

            <div className="header_menu">
                <div className="header_menu_profile">
                {hasUser?
                    <img src={gravatar(user.email)} alt={user.email}/>:
                    <img src="https://i.imgur.com/opRmWt8.png" alt="User"/>
                }
                <p>Perfil</p>   
                </div>
                <ul>
                    {hasUser?
                        <li><a href="">{user.name}</a></li>:
                        null
                    }
                    {hasUser?
                    <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a>
                    </li>
                        : 
                    <li>
                        <Link to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                    }
                </ul>
            </div>
        </header>
    );
}
const mapStateToProps=state=>{
    return{
        user:state.user
    }
};

const mapDispatchToProps= {
    logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

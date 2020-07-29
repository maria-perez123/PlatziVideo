import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {getVideoSearch} from '../actions';
import '../assets/styles/components/Search.scss';

const Search=props=>{

    const {isHome} =props;

    const inputStyle=classNames('input2',{
        isHome
    });

    const handleInput=event=>{
        if (event.key === 'Enter') {
            props.getVideoSearch(event.target.value);
        }
    }

    return(
        <section className="main">
            <h2 className="main_title">¿Qué quieres ver hoy?</h2>
            <input 
                className={inputStyle}
                type="text" 
                placeholder="Buscar..." 
                onKeyUp={handleInput}
            />
        </section>
    );
}

const mapStateToProps =state=>{
    return{
        searchResult: state.searchResult,
    }
}

const mapDispatchToProps={
    getVideoSearch,
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);



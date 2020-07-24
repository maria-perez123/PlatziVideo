import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getVideoSource} from '../actions';
import '../assets/styles/components/Player.scss';
import { Redirect } from 'react-router-dom';

const Player=props=>{

    const {id}=props.match.params;
    const hasPlaying= Object.keys(props.playing).length>0;

    useEffect(()=>{
        props.getVideoSource(id);        
    }, []);

    return hasPlaying?(
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={()=>props.history.goBack()}>
                    regresar
                </button>
            </div>
        </div>
    ): setTimeout(<Redirect to="/404/" />, 0);
};


//en vez de usar redirect para ejecutar de forma sincrona
//se puede utilizar no found 

const mapStateToProps=state=>{
    return{
        playing: state.playing,
    }
}

const mapDispatchToProps={
    getVideoSource,
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
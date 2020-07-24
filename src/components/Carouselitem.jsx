import React from 'react';
import {connect} from 'react-redux';
import {setFavorite} from '../actions';
import {deleteFavorite} from '../actions';
import PropTypes from 'prop-types';
import '../assets/styles/components/Carouselitem.scss';

const Carouselitem=(props)=>{
    const {id, cover, title, year, contentRating, duration, isList}=props;
    const handleSetFavorite=()=>{
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handledeleteFavorite=(itemId)=>{
        props.deleteFavorite(itemId)
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item_img" src={cover} alt={title} />
            <div className="carousel-item_details">
                <div>
                    <img 
                        src="https://img.icons8.com/nolan/64/play.png" 
                        alt="play" 
                        width="25px" 
                        height="25px"
                    />
                    
                    { isList ? 
                       <img 
                            src="https://img.icons8.com/nolan/64/delete-sign.png" 
                            alt="see more" 
                            width="25px" 
                            height="25px"
                            onClick={()=>handledeleteFavorite(id)}
                        /> :
                        <img 
                            src="https://img.icons8.com/nolan/64/zoom-in.png" 
                            alt="see more" 
                            width="25px" 
                            height="25px"
                            onClick={handleSetFavorite}
                        />
                    }

                </div>
                <p className="carousel-item_details-title">{title}</p>
                <p className="carousel-item_details-subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    )
};

Carouselitem.propTypes={
    cover: PropTypes.string,
     title:PropTypes.string,  
     year:  PropTypes.number, 
     contentRating: PropTypes.string,  
     duration: PropTypes.number
}

const mapDispatchToProps={
    setFavorite, 
    deleteFavorite, 
}

export default connect(null, mapDispatchToProps)(Carouselitem);
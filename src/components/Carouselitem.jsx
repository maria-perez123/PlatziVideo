import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Carouselitem.scss';

const Carouselitem=({cover, title, year, contentRating, duration})=>(
    <div className="carousel-item">
        <img className="carousel-item_img" src={cover} alt={title} />
        <div className="carousel-item_details">
            <div>
                <img src="https://img.icons8.com/nolan/64/play.png" alt="play" width="25px" height="25px"/>
                <img src="https://img.icons8.com/nolan/64/zoom-in.png" alt="see more" width="25px" height="25px"/>
            </div>
<p className="carousel-item_details-title">{title}</p>
            <p className="carousel-item_details-subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

Carouselitem.propTypes={
    cover: PropTypes.string,
     title:PropTypes.string,  
     year:  PropTypes.number, 
     contentRating: PropTypes.string,  
     duration: PropTypes.number
}

export default Carouselitem;
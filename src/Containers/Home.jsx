import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

//¿los proptypes solo sirven para identificar el tipo de prop?
//¿ En que casos practicos se suele usar useEffect, en el proyecto se hacia para obetener un id, cada vez que se va a una ruta del player?

//const API='http://localhost:3000/initalState';

const Home=({mylist, trends, originals, searchResult, videoSearching})=>{

    const hasSearch= Object.keys(searchResult).length>0;
    console.log(videoSearching[0]);

    return (
        <>
            <Header/>
            <Search isHome/>  
            {videoSearching[0]?
            (hasSearch&&
                <Categories title="Resultados de la busqueda...">
                    <Carousel>
                        {searchResult.map(item =>
                        <Carouselitem 
                            key={item.id} 
                            {...item}
                        />
                        )}
                    </Carousel>
                </Categories>  
            ) :
            <h1>Video "{videoSearching[1]}" no encontrado</h1>
            }  

            {mylist.length>0 &&
                <Categories title="mi lista">
                    <Carousel>
                        {mylist.map(item =>
                        <Carouselitem 
                            key={item.id} 
                            {...item}
                            isList
                        />
                        )}
                    </Carousel>
                </Categories>                
            }
            
            <Categories title="tendencia">
                <Carousel>
                    {trends.map(item=>
                    <Carouselitem key={item.id}{...item}/>
                    )}
                </Carousel>  
            </Categories>

            <Categories title="Originales de platzi">
                <Carousel>
                    {originals.map(item=>
                    <Carouselitem key={item.id}{...item}/>
                    )}
                </Carousel>  
            </Categories>
        </>
    );
}

const mapStateToProps=state=>{
    return {
        mylist:state.mylist,
        trends:state.trends,
        originals:state.originals,
        searchResult: state.searchResult,
                //***************** */
                videoSearching: state.videoSearching,
                //***************** */
    };
};

export default connect(mapStateToProps, null)(Home);
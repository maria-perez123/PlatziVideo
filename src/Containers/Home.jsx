import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import '../assets/styles/App.scss';
import Header from '../components/Header';

//const API='http://localhost:3000/initalState';

const Home=({mylist, trends, originals})=>{
    return (
        <>
            <Header/>
            <Search isHome/>  
            {mylist.length > 0 &&
                <Categories title="mi lista">
                    <Carousel>
                        {mylist.map(item=>
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
    };
};

export default connect(mapStateToProps, null)(Home);
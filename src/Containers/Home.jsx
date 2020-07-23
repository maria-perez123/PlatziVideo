import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/Carouselitem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API='http://localhost:3000/initalState';

const Home=()=>{
    const initialState= useInitialState(API);
    /*const [videos, setVideos]= useState({ mylist: [], trends: [], originals: [] });
    useEffect(()=>{
        fetch('http://localhost:3000/initalState')
            .then(response=>response.json())
            .then(data=>setVideos(data))
    }, []);*/

    return initialState.length===0? <h1>Loading...</h1>:(
        <>
            <Search/>  
            {initialState.mylist.length > 0 &&
                <Categories title="mi lista">
                    <Carousel>
                        {initialState.mylist.map(item=>
                        <Carouselitem key={item.id}{...item}/>
                        )}
                    </Carousel>  
                </Categories>
            }
            <Categories title="tendencia">
                <Carousel>
                    {initialState.trends.map(item=>
                    <Carouselitem key={item.id}{...item}/>
                    )}
                </Carousel>  
            </Categories>

            <Categories title="Originales de platzi">
                <Carousel>
                    {initialState.originals.map(item=>
                    <Carouselitem key={item.id}{...item}/>
                    )}
                </Carousel>  
            </Categories>
        </>
    );
}
export default Home;
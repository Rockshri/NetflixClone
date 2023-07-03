import React, { useEffect, useState } from 'react'
import instance from '../assets/Axios'
import Carousel from 'better-react-carousel'
// import Carousel from 'better-react-carousel/dist/better-react-carousel.esm.css';
// import 'better-react-carousel/dist/styles.css'
import "./Home.css"
let baseURL="https://image.tmdb.org/t/p/original"


const Home = (props) => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
            fetchingData()  
    },[props.fetchurl])

   async function fetchingData(){
        const response = await instance.get(props.fetchurl);
        console.log(response);
        setMovies(response.data.results);
    }
    

  return (
    <div className='container'>
      <h3>{props.title}</h3>
      
      <div className='movie-content'>
     
        {movies.map((movie, id)=>{
            return  <img src={`${baseURL}${movie.poster_path}`} alt={movie.name} className='movie-image' /> 
      })}
   
    
      
     </div>
    
    
    
   
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import instance from '../assets/Axios'

import "./Banner.css"

let baseURL="https://image.tmdb.org/t/p/original"
// Math.floor(Math.random()*19)
const Banner = (props) => {
    const [banner, setBanner] = useState([]);

    useEffect(()=>{
          fetchingBanner();
    },[])

    async function fetchingBanner(){
        const req = await instance.get(props.fetchurl);
        console.log(req);
        setBanner(req.data.results[Math.floor(Math.random()*19)])
    }

  

  return (
    <div>
        
      <header className='header'  style={{backgroundImage:`url(${baseURL}${banner.backdrop_path})`}}>
       <div className='netflix-img'><img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-2048x550.png" alt="" srcset=""  className='image'/></div>
        <div className='banner-content'>
           
        <h1 className='content-name'>{banner.title}</h1>
        <div className='buttons'> 
            <button>Play</button>
            <button>My List</button>
        </div>
        <h4 className='overview'>
            {banner.overview}
        </h4>
        </div>
       
        

      </header>
    </div>
  )
}

export default Banner

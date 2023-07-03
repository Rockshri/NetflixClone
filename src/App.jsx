import { useState } from 'react'
import requests from './assets/Requests' 
import Home from './componants/Home'

import './App.css'
import Banner from './componants/Banner'

function App() {
 

  return (
    <>
      <Banner fetchurl ={requests.fetchComedyMovies}/>
      <Home title={"Netflix Trending"} fetchurl = {requests.fetchTrending}/>
      <Home title={"Netflix Originals"} fetchurl = {requests.fetchNetflixOriginals}/>
      <Home title={"Netflix Top Rated"} fetchurl = {requests.fetchTopRated}/>
      <Home title={"Netflix Action Movies"} fetchurl = {requests.fetchActionMovies}/>
      <Home title={"Netflix Comedy Movies"} fetchurl = {requests.fetchComedyMovies}/>
      <Home title={"Netflix Horror Movies"} fetchurl = {requests.fetchHorrorMovies}/>
      <Home title={"Netflix Romance Movies"} fetchurl = {requests.fetchRomanceMovies}/>
      <Home title={"Netflix Documentaries"} fetchurl = {requests.fetchDocumentaries}/>
    </>
  )
}

export default App

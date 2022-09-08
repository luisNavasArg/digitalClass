import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/index'
import Home from './pages/Home'
import Hoteles from './pages/Hoteles'
import Ofertas from './pages/Ofertas'
import Nav from './components/Nav'
import Noticias from './components/Noticias'
import {useEffect, useState} from 'react'
function App() {
  const [hoteles,setHoteles] = useState([]);
  const fecthHotels= async()=>{
    const urlHotels = "https://pruebagcd.herokuapp.com/hoteles";
    const response = await fetch(urlHotels);
    const resJson = await response.json();
    resJson.forEach(h=>console.log(h))
  } 
  useEffect(()=>{
    fecthHotels();
  },[])
  return (
    <React.Fragment>
      <Nav/>
      <Noticias/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hoteles" element={<Hoteles />} />
        <Route path="ofertas" element={<Ofertas />} />
    </Routes>
    <Footer/> 
    </React.Fragment>
  );
}

export default App;
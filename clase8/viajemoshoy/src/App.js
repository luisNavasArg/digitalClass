import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer/index'
import Home from './pages/Home'
import Hoteles from './pages/Hoteles'
import Ofertas from './pages/Ofertas'
import Nav from './components/Nav'
import Noticias from './components/Noticias'
import Paquetes from './pages/Paquetes';
import Traslados from './pages/Traslados';
import Aereo from './pages/Aereo'
import {useEffect, useState} from 'react'
function App() {
  const [hoteles,setHoteles] = useState([]);
  const [datos,setDatos]= useState(true);
  const fecthHotels= async()=>{
    const urlHotels = "https://pruebagcd.herokuapp.com/hoteles";
    const response = await fetch(urlHotels);
   
    const resJson = await response.json();
    // resJson.forEach(h=>console.log(h))
    if(resJson.length ==0){
      console.log('No hay datos');
    }else{
      setHoteles(resJson)
      setDatos(false)
    }
  } 
  useEffect(()=>{
    fecthHotels();
  },[])
  return (
    <React.Fragment>
      
      <Nav/>
      <Noticias/>
      {datos? <div className='container d-flex justify-content-between'>
        <h3>Esperando por datos...</h3>
        <span className='btn btn-primary disabled placeholder-glow col-6'></span>
        
      </div>:
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hoteles" element={<Hoteles hoteles={hoteles} />} />
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="paquetes" element={<Paquetes />} />
        <Route path="traslados" element={<Traslados />} />
        <Route path="aereo" element={<Aereo />} />
    </Routes>
}
    <Footer/> 
    </React.Fragment>
  );
}

export default App;
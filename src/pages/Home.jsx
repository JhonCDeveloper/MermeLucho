// En tu archivo Home.jsx
import React from 'react';
import mermeluchosBG from '../assets/MermeluchosBG.webp';
import verify from '../assets/Perrenque.png';

/* import estrellas from '../assets/EstrellasBG.png'; */	

const Home = () => {
  return (
    <div className="p-6 mermeluchos-container">

        <img 
        src={mermeluchosBG} 
        alt="Fondo decorativo Mermeluchos" 
        className="w-full max-w-5xl mx-auto rounded-xl shadow-lg mermeluchos-img"
      />

        <h1 className="main-title">BIENVENIDOS A LA <span className="mermepagina">MERMEPÁGINA</span> WEB</h1> 
        <div className="containerBorder">
            <img src={verify} 
            alt="Fondo decorativo Mermeluchos" 
            className="w-full max-w-5xl mx-auto rounded-xl shadow-lg verificado-img" />
        </div>

        <h2 className="second-subtitle"><span className="phraseMark">"</span>Sabores que nacen de la tierra, endulzados con tradición.</h2>
    </div>
  );
};

export default Home;
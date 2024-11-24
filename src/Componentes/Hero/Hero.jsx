import React from 'react'
import { Link } from "react-router-dom";
import './Hero.css'
import Carruselimg from './Carruselimg/Carruselimg'


const Hero = () => {
  return (
    <div className="contenedor-principal">
        <div className="texto-principal">
            <h1>Descubre, Cocina Y Aprende</h1>
            <p className='text1'>Añade recetas que quieras compartir y guardar, diviértete cocinando mientras aprendes.</p>
            <p className='text2'>Somos una página que resuelve el problema sobre una necesidad básica, cocinar. Respondemos preguntas como: “¿Qué voy a cocinar hoy?” y “No sé cocinar ¿Cómo aprendo?”</p>
            <p className='text3'>¡Con chefcitos, conviértete en un gran chef y recuerda: “¡Cualquiera puede cocinar”!</p>
            <Link to="/agregar-receta">
              <button>Empezar a cocinar</button>
            </Link>

            
        </div>
        <Carruselimg />
    </div>
  );
};

export default Hero;

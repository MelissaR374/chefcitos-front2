import React, { useEffect, useState } from 'react'
import './Carruselimg.css';

const imagenes = [
    '/src/assets/ramen.png',
    '/src/assets/hamburg.png',
    '/src/assets/comidacoreana.png',
    '/src/assets/ensalada.png',
    '/src/assets/burritos.png',
    '/src/assets/donas.png'
];

const Carruselimg = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


  return (
    <div className='carrousel-container'>
        {imagenes.map((imagen, index) => (
            <img 
                key = {index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            />
        ))}
    </div>
  );
};

export default Carruselimg;
import React, {useState} from 'react';
import './Receta.css';
import { Link } from 'react-router-dom';


const Receta = ({receta}) => {
    const [favorito, setFavorito] = useState(false);
    const [ingredientesMarcados, setIngredientesMarcados] = useState(
      Array(receta.ingredientes.length).fill(false)
    );
    const [procedimientoMarcado, setProcedimientoMarcado] = useState(
      Array(receta.procedimiento.length).fill(false)
    );
  
    
    
    const toggleFavorito = () => {
      setFavorito(!favorito);
    };
  
    const toggleIngrediente = (index) => {
      const nuevosIngredientes = [...ingredientesMarcados];
      nuevosIngredientes[index] = !nuevosIngredientes[index];
      setIngredientesMarcados(nuevosIngredientes);
    };
  
    const toggleProcedimiento = (index) => {
      const nuevosPasos = [...procedimientoMarcado];
      nuevosPasos[index] = !nuevosPasos[index];
      setProcedimientoMarcado(nuevosPasos);
    };
  
    return (
      <div className='general-container'>
        <div className="receta-container">
          <div className="receta-imagen-container">
            <img className="receta-imagen" src={receta.imagen} alt={receta.titulo} />
          </div>

          <div className="receta-etiquetas">
            <button className={`receta-dificultad ${receta.difficultad.toLowerCase()}`}>
              {receta.difficultad}
            </button>
            <button className={`receta-categoria ${receta.categoria.toLowerCase()}`}>
              {receta.categoria}
            </button>
            <button
            className={`receta-favorito ${favorito ? 'activo' : ''}`}
            onClick={toggleFavorito}
            >
              {favorito ? '❤ Favorito' : ' ♡ Añadir a favoritos'}
            </button>
          </div>
          

          
          <div className="receta-content">
            {/* Contenedor para los ingredientes y descripción */}
            <div className="receta-texto">
              <h2 className="receta-titulo">{receta.titulo}</h2>
              <p className="receta-descripcion">{receta.descripcion}</p>

              <div className="receta-ingredientes">
                <h3>Ingredientes</h3>
                <ul>
                  {receta.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="ingrediente-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={ingredientesMarcados[index]}
                          onChange={() => toggleIngrediente(index)}
                        />
                        <span
                          className={`ingrediente-text ${
                            ingredientesMarcados[index] ? 'marcado' : ''
                          }`}>
                          {ingrediente}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="receta-procedimiento">
                <h3>Procedimiento</h3>
                <ol>
                  {receta.procedimiento.map((paso, index) => (
                    <li key={index} className="procedimiento-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={procedimientoMarcado[index]}
                          onChange={() => toggleProcedimiento(index)}
                        />
                        <span
                          className={`procedimiento-text ${
                            procedimientoMarcado[index] ? 'marcado' : ''
                          }`}
                        >
                          {paso}
                        </span>
                      </label>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contenedor para las imágenes */}
            <div className="receta-imagenes">
              <h3>Galería</h3>
              <div className="imagenes-grid">
                {receta.galeria.map((imagen, index) => (
                  <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="receta-video-container">
            {/* <h1>Video descriptivo</h1> */}
            <video className="receta-video" controls>
              <source src={receta.video} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>

      
    );
}

export default Receta
import React, {useState, useEffect} from 'react';
import './Navbar.css';
import IconoHam from '/src/assets/hamburguesa.png';
import IconoCoct from '/src/assets/copa-de-martini-citricos.png';
import barras from '/src/assets/clasificacion-de-barras.png';
import corazonfav from '/src/assets/fav.png';
import raton from '/src/assets/raton.png';
import libro from '/src/assets/libro-marcador.png'
import add from '/src/assets/mas.png'
import entrar from '/src/assets/iniciar-sesion.png'
import salir from '/src/assets/cerrar-sesion.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const placeholders = [
    "encuentra la receta perfecta",
    "busca tu plato favorito",
    "explora nuevas ideas para cocinar"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    //agregar función modo oscuro (interfaz de cocteleria)
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='navbar'>
      <div className='menu-icon' onClick={toggleMenu}>
        <i class="fi fi-br-menu-burger"></i>
      </div>
      <Link to="/">
        <div className='logo'>Chefcitos</div>
      </Link>

      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <img src={barras} alt="Barras" className='icon-barras-menu'onClick={toggleMenu}/>
        <ul>
          <li>
            <Link to="/recetas-favoritas"><button className="fav"><img src={corazonfav} alt="Fav" className='icon-corazonfav' />Favoritos</button></Link>
          </li>
          <li>
            <Link to="/perfil"><button className="perfil"><img src={raton} alt="Perfil" className='icon-raton' />Perfil</button></Link>
          </li>
          <li>
            <Link to="/recetas-creadas"><button className="mine"><img src={libro} alt="Misrecetas" className='icon-recetario' />Mis recetas</button></Link>
          </li>
          
        </ul>
        <Link to="/agregar-receta">
          <button className="add-recipe"><img src={add} alt="add" className='icon-agregar' />Añadir receta</button>
        </Link>
        
        <button className="login"><img src={entrar} alt="entrar" className='icon-entrar'/>Iniciar sesión</button>
      </nav>

      {/* Fondo oscuro al abrir el menú */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="busqueda">
        <input className='buscar' type="text" placeholder={placeholders[placeholderIndex]}/>
        <button className='icono-buscar'>
          <span><i class="fi fi-br-search"></i></span>
        </button>
      </div>
      
      <div className="togglebutton">
        <img src={IconoCoct} alt="Coctel" className='icon-izq'/>  
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={handleToggle}/>
          <span className='slider'></span>
        </label>
        <img src={IconoHam} alt="Hamburguesa" className="icon-der" />
      </div>
    
      <div className="botones-IniciaRegistra">
        <Link to="/registro">
          <button className="registrar">Resgistrarse</button>
        </Link>
        <Link to="/inicio">
          <button className="iniciarSesion">Iniciar Sesión</button>
        </Link>
      </div>
      

    </header>

  );
};

export default Navbar;

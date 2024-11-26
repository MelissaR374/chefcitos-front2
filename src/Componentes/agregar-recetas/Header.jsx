import React, { useState } from 'react';
import './Header.css';
import cubiertos from '/src/assets/cubiertos.png';
import barras from '/src/assets/clasificacion-de-barras.png';
import corazonfav from '/src/assets/fav.png';
import raton from '/src/assets/raton.png';
import libro from '/src/assets/libro-marcador.png'
import add from '/src/assets/mas.png'
import entrar from '/src/assets/iniciar-sesion.png'
import salir from '/src/assets/cerrar-sesion.png'

import { Link } from 'react-router-dom';

const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

    const categories = ["Desayuno", "Almuerzo", "Comida", "Snack", "Cena", "Postre", "Bebida"];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Actualiza la categoría seleccionada
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="header-left">
                <div className="menu-btn" onClick={toggleMenu}>
                    <i className="fi fi-br-menu-burger"></i>
                </div>
                <Link to="/">
                    <h1 className='logo'>Chefcitos</h1>
                </Link>
                
            </div>

            <div className="header-right">
                <button className="botonred">Añadir</button>
                <button className="botorange">Vista previa</button>
                 
            </div>
            <br />

            <div className="outer-container">
                <div className="contenedor">
                    <div className="categories">
                        <ul>
                            <li className="active">Categoría</li>
                            <div className="cat">
                                {categories.map((category) => (
                                    <li
                                        key={category}
                                        className={selectedCategory === category ? "selected" : ""}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </div>
                        </ul>
                        <div className="botonotro">
                            <button className="otro">Otro</button>
                            <img src={cubiertos} alt="Icubiertos" className="icon-cubiertos" />
                        </div>
                    </div>
                </div>
                 
            </div>

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





        </div>
    );
};

export default Header;

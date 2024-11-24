import React, { useState } from 'react';
import './Header.css';
import cubiertos from '/src/assets/cubiertos.png';

const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

    const categories = ["Desayuno", "Almuerzo", "Comida", "Snack", "Cena", "Postre", "Bebida"];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Actualiza la categoría seleccionada
    };

    return (
        <div className="header">
            <div className="header-left">
                <div className="menu-btn">
                    <i className="fi fi-br-menu-burger"></i>
                </div>
                <h1 className='logo'>Chefcitos</h1>
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
        </div>
    );
};

export default Header;

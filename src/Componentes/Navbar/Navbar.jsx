import React, {useState, useEffect} from 'react';
import './Navbar.css';
import IconoHam from '/src/assets/hamburguesa.png';
import IconoCoct from '/src/assets/copa-de-martini-citricos.png';

export const Navbar = () => {
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

  return (
    <header className='navbar'>
      <div className='menu'>
        <i class="fi fi-br-menu-burger"></i>
      </div>
      <div className='logo'> Chefcitos</div>

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
          <button className="registrar">Resgistrarse</button>
          <button className="iniciarSesion">Iniciar Sesión</button>
      </div>
      

    </header>

  );
};

export default Navbar

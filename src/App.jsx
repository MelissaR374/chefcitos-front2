import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar  from './Componentes/Navbar/Navbar'
import Hero from './Componentes/Hero/Hero'
import Registro from './Componentes/incio-registro/Registro'
import Inicio from './Componentes/incio-registro/inicio'
import Header from './Componentes/agregar-recetas/Header'
import RecipeForm from './Componentes/agregar-recetas/RecipeForm'
import RecipeForm2 from './Componentes/agregar-recetas/RecipeForm'


const Layout = ({ children }) => {
  const location = useLocation();

  // Oculta el Navbar en la ruta de inicio de sesión y registro
  const hideNavbar = location.pathname === "/inicio" || location.pathname === "/registro";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
   <>
    <Header></Header>
    <RecipeForm/>
   </>
  
  );
};

export default App;
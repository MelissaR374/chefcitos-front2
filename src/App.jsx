import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar  from './Componentes/Navbar/Navbar'
import Hero from './Componentes/Hero/Hero'
import Registro from './Componentes/incio-registro/Registro'
import Inicio from './Componentes/incio-registro/inicio'
import RecipeForm from './Componentes/agregar-recetas/RecipeForm'


const Layout = ({ children }) => {
  const location = useLocation();

  // Oculta el Navbar en la ruta de inicio de sesión y registro
  const hideNavbar =
    location.pathname === "/inicio" ||
    location.pathname === "/registro" ||
    location.pathname === "/agregar-receta";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/inicio" element={<Inicio />}/>
          <Route path="/agregar-receta" element={<RecipeForm />} />
        </Routes>
      </Layout>
    </Router>
    
 
  
  );
};

export default App;
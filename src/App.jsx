import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar  from './Componentes/Navbar/Navbar'
import Hero from './Componentes/Hero/Hero'
import Registro from './Componentes/incio-registro/Registro.jsx'
import Inicio from './Componentes/incio-registro/inicio'

const Layout = ({ children }) => {
  const location = useLocation();

  // Oculta el Navbar solo si estás en la ruta de inicio de sesión
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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/inicio" element={<Inicio />}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
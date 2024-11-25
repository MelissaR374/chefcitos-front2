import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar  from './Componentes/Navbar/Navbar'
import Hero from './Componentes/Hero/Hero'
import Registro from './Componentes/incio-registro/Registro'
import Inicio from './Componentes/incio-registro/inicio'
import RecipeForm from './Componentes/agregar-recetas/RecipeForm'
import RecipeGrid from './Componentes/Favoritos/RecipeGrid';
import { useEffect, useState } from 'react';

import SpaghettiImage from "./assets/images/spaghetti.jpg";
import SopaImage from "./assets/images/sopa.jpg";
import AlitasImage from "./assets/images/alitas.jpg";
import EnsaladaImage from "./assets/images/ensalada.jpg"
import PastelImage from "./assets/images/pastel.jpg"
import SuhiImage from "./assets/images/suhi.jpg"


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

const recipes = [
  {
    title: "Spaghetti carbonara",
    ingredients: 8,
    difficulty: "Media",
    image: "/assets/spaghetti.jpg",
    descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
  },
  {
    title: "Sopa de calabaza",
    ingredients: 10,
    difficulty: "Media",
    image: "/assets/sopa.jpg",
    descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
  },
  {
    title: "Alitas de pollo fritas",
    ingredients: 6,
    difficulty: "Fácil",
    image: "/assets/alitas.jpg",
    descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
  },
 
];


const App = () => {
  //llamada a datos estáticos
  const [recipes, setRecipes] = useState([]);

  //IMPORTANTE PONER EL API DE BD AQUI EN ESTE 
  //USEEFFECT
  // useEffect(() => {
  //   fetch("https://api.example.com/recipes")
  //     .then((response) => response.json())
  //     .then((data) => setRecipes(data))
  //     .catch((error) => console.error("Error fetching recipes:", error));
  // }, []);

  
  //DATOS ESTATICOS, PARA DARLE FORMATO
  //ESTO SE QUITA CUANDO SE TENGA LA API
  useEffect(() => {
    const staticRecipes = [
      {
        title: "Spaghetti carbonara",
        ingredients: 8,
        difficulty: "Media",
        image: SpaghettiImage, // Imagen temporal
        descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
      },
      {
        title: "Sopa de calabaza",
        ingredients: 10,
        difficulty: "Media",
        image: SopaImage, // Imagen temporal
        descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
      },
      {
        title: "Alitas de pollo fritas",
        ingredients: 6,
        difficulty: "Fácil",
        image: AlitasImage, // Imagen temporal
        descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
      },
      {
        title: "Spaghetti carbonara",
        ingredients: 8,
        difficulty: "Media",
        image: EnsaladaImage, // Imagen temporal
        descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
      },
      {
        title: "Sopa de calabaza",
        ingredients: 10,
        difficulty: "Media",
        image: PastelImage, // Imagen temporal
        descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
      },
      {
        title: "Alitas de pollo fritas",
        ingredients: 6,
        difficulty: "Fácil",
        image: SuhiImage, // Imagen temporal
        descrip: "Clásica pasta italiana hecha con queso, crema, pimienta..."
      },
      
    ];

    // Actualiza el estado con los datos simulados
    setRecipes(staticRecipes);
  }, []); 
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/agregar-receta" element={<RecipeForm />} />
          <Route
            path="/recetas"
            element={
              <div>
                <h1
                  style={{
                    textAlign: "left",
                    margin: "20px 0 0 30px",
                    color: "#F2CB4B",
                    paddingTop: "80px",
                    paddingLeft: "50px",
                    marginBottom: "20px",
                    marginTop:"20px",
                  }}
                >
                  Recetas favoritas
                </h1>
                <RecipeGrid recipes={recipes} />
              </div>
            }
          />
        </Routes>
      </Layout>
  </Router>
    
 
  
  );
};

export default App;
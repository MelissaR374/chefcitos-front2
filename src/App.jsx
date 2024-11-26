import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar  from './Componentes/Navbar/Navbar'
import Hero from './Componentes/Hero/Hero'
import Registro from './Componentes/incio-registro/Registro'
import Inicio from './Componentes/incio-registro/inicio'
import RecipeForm from './Componentes/agregar-recetas/RecipeForm'
import RecipeGrid from './Componentes/Favoritos/RecipeGrid';
import RecetasGrid from './Componentes/Recetas-creadas/RecetasGrid';
import Receta from './Componentes/Recetaa/Receta';
import ListaRecetas from './Componentes/ListaRecetas';


import SpaghettiImage from "./assets/images/spaghetti.jpg";
import SopaImage from "./assets/images/sopa.jpg";
import AlitasImage from "./assets/images/alitas.jpg";
import EnsaladaImage from "./assets/images/ensalada.jpg"
import PastelImage from "./assets/images/pastel.jpg"
import SuhiImage from "./assets/images/suhi.jpg"
import PastaImage from "./assets/pasta.jpg"

const RecetaWrapper = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const receta = recetas.find((r) => r.id === parseInt(id)); // Busca la receta con el ID correspondiente

  if (!receta) {
    return <h1>Receta no encontrada</h1>; // Maneja el caso en que la receta no exista
  }

  return <Receta receta={receta} />; // Renderiza el componente Receta con los datos específicos
};

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

const recetas = [
  {
    id: 1,
    titulo: 'Pasta a la boloñesa',
    difficultad: 'media',
    categoria: 'comida',
    descripcion:
      'La pasta boloñesa es un clásico plato italiano originario de la región de Emilia-Romaña, especialmente de la ciudad de Bolonia. Consiste en una salsa a base de carne, tomate, y verduras, cocinada a fuego lento para obtener un sabor profundo y rico. Es ideal para comidas familiares, cenas informales o celebraciones donde se busca compartir una comida reconfortante. La historia cuenta que la receta fue popularizada en el siglo XIX, pero el concepto de una salsa de carne para pasta tiene raíces más antiguas.',
    ingredientes: [
      '400 gr de pasta',
      '400 gr de carne molida',
      '1 cebolla picada',
    ],
    procedimiento: [
      'Calienta un poco de aceite de oliva en una sartén grande',
      'Añade la carne molida a la sartén y cocina a fuego medio-alto',
    ],
    imagen: PastaImage, //Primera imagen que suba el usuario al añadir la receta, IMAGEN DE BANNER
    galeria: [SpaghettiImage, SopaImage, AlitasImage, SuhiImage, PastaImage, PastelImage, SpaghettiImage, SopaImage], //Si el usuario sube más de una imagen, se ponen en esta galería
    video: '/ruta/a/video/pasta.mp4',
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
    //  <>
    //    {recetas.map((receta) => (
    //        <Receta key={receta.id} receta={receta} />
    //    ))}
    //  </>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/agregar-receta" element={<RecipeForm />} />  
          <Route path="/receta/:id" element={<RecetaWrapper />} />    
          <Route path="/recetas" element={<ListaRecetas recetas={recetas} />} />     
          <Route path="*" element={<h1>Página no encontrada</h1>} />

          <Route
            path="/recetas-favoritas"
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

          <Route
            path="/recetas-creadas"
            element={
              <div>
                <h1 style={{ textAlign: "left", margin: "20px 0 0 30px", color: "#EB713A", paddingTop:"80px", paddingLeft: "150px" }}>
                  Mis recetas
                </h1>
                <RecetasGrid recipes={recipes} />
              </div>
            }
          />

          

        </Routes>
      </Layout>
    </Router>
    
 
  
  );
};

export default App;
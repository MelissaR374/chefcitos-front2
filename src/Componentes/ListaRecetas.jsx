// ListaRecetas.jsx
import React from "react";
import { Link } from "react-router-dom";

const ListaRecetas = ({ recetas }) => {
  return (
    <div>
      {recetas.map((receta) => (
        <div key={receta.id}>
          <h3>{receta.titulo}</h3>
          <Link to={`/receta/${receta.id}`}>Ver receta</Link>
        </div>
      ))}
    </div>
  );
};

export default ListaRecetas;

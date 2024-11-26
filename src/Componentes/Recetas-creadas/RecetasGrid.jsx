import React from "react";
import RecetasCard from "./RecetasCard";
import "./RecetasGrid.css"

const RecetasGrid = ({ recipes }) => {
  const handleEdit = (recipe) => {
    alert(`Editar: ${recipe.title}`);
  };

  const handleDelete = (recipe) => {
    alert(`Eliminar: ${recipe.title}`);
  };

  return (
    <div className="recetas-grid">
    {recipes.map((recipe, index) => (
      <RecetasCard
        key={index}
        recipe={recipe}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ))}
  </div>
  );
};



export default RecetasGrid;


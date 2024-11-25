/*ARCHIVO PARA LOS CUADROS EN GENERAL*/


import React, {useState} from 'react'
import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import "./RecipeGrid.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
`;




const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>Ingredientes: {recipe.ingredients}</p>
          <p>Dificultad: {recipe.difficulty}</p>
          <p>{recipe.descrip}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;

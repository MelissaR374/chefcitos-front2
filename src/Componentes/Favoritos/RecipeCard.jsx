/*ARCHIVO PARA CADA CUADRO QUE SE GENERE*/

import React from 'react'
import styled from "styled-components";
import "./RecipeCard.css";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  padding: 16px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  border-radius: 10px;
  
`;

const Title = styled.h3`
  margin: 12px 0;
  font-size: 1.2rem;
  color: #333;
`;

const Details = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.title} />
      <Title>{recipe.title}</Title>
      <Details>
        <p>Ingredientes: {recipe.ingredients}</p>
        <p>Dificultad: {recipe.difficulty}</p>
        <p>{recipe.descrip}</p>
      </Details>
    </Card>
  );
};

export default RecipeCard;

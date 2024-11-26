import React from "react";
import "./RecetasGrid.css";

const RecetasCard = ({ recipe, onEdit, onDelete }) => {
    return (
        <div className="recetas-card">
          <img src={recipe.image} alt={recipe.title} className="recetas-card-image" />
          <h3 className="recipe-card-title">{recipe.title}</h3>
          <div className="recipe-card-buttons">
                <button className="edit-button" onClick={() => onEdit(recipe)}>
                Editar
                </button>
                <button className="borrar-boton" onClick={() => onDelete(recipe)}>
                Eliminar
                </button>
          </div>
        </div>
    );
};
    

// const styles = {
//   card: {
//     width: "250px",
//     margin: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     overflow: "hidden",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   image: {
//     width: "100%",
//     height: "150px",
//     objectFit: "cover",
//   },
//   title: {
//     fontSize: "18px",
//     margin: "10px",
//     textAlign: "center",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//     margin: "10px",
//   },
//   editButton: {
//     backgroundColor: "#5CB85C",
//     border: "none",
//     color: "white",
//     padding: "10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   deleteButton: {
//     backgroundColor: "#D9534F",
//     border: "none",
//     color: "white",
//     padding: "10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

export default RecetasCard;
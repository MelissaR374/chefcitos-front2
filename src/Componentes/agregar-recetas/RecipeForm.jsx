import React, { useState } from "react";
import Header from './Header';
import "./RecipeForm.css";
import camara from '/src/assets/camara-circular.png';
import basura from '/src/assets/basura.png';


const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([
    { name: "huevo", quantity: 1, unit: "pza" },
    { name: "harina", quantity: 100, unit: "gr" },
  ]);
  const [steps, setSteps] = useState([""]);
  const [images, setImages] = useState(["+"]); // Estado para placeholders de imágenes

  // Manejo de imágenes
  const addImagePlaceholder = () => {
    setImages([...images, ""]); // Agrega un nuevo placeholder
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages); // Elimina el placeholder específico
  };

  // Manejo de ingredientes
  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: 1, unit:"" }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setIngredients(updatedIngredients);
  };


  // const handleIngredientChange = (index, field, value) => {
  //   setIngredients((prevIngredients) =>
  //     prevIngredients.map((ingredient, i) =>
  //       i === index ? { ...ingredient, [field]: value } : ingredient
  //     )
  //   );
  // };

  const increaseQuantity = (index) => {
    const updatedIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, quantity: ingredient.quantity + 1 } : ingredient
    );
    setIngredients(updatedIngredients);
  };

  const decreaseQuantity = (index) => {
    const updatedIngredients = ingredients.map((ingredient, i) =>
      i === index && ingredient.quantity > 1
        ? { ...ingredient, quantity: ingredient.quantity - 1 }
        : ingredient
    );
    setIngredients(updatedIngredients);
  };

  const handleIngredientKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita salto de línea
      if (index === ingredients.length - 1) {
        addIngredient(); // Agrega un nuevo campo solo si está en el último input
      }
    }
  };

  const deleteIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };
                  
  // Manejo de pasos
  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = steps.map((step, i) => (i === index ? value : step));
    setSteps(updatedSteps);
  };

  const handleStepKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      if (index === steps.length - 1) {
        addStep(); 
      }
    }
  };

  const deleteStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };



  return (
    <div className="contenedorall">
      <Header />
      <div className="recipe-form">
      
        {/*<textarea> es un input 
        más amplio o que se puede ampliar 
        para elaborar más algo al escribir */}

        {/* Imagenes */}
        <div className="imag-section">
          <div className="imagenes-tit">
            <h1>Imagenes de la receta</h1>
          </div>
          {/* <div className="subeimagen">
            <p>Sube tu imagen haciendo click aquí</p>
          </div> */}
          <div className="imag-grid">
            {images.map((image, index) => (
                <button key={index} className="imag-placeholder">
                  <img src={camara} alt="Icam" className="icon-cam" />
                  <button
                  type="button"
                  className="delete-buttonimg"
                  onClick={() => removeImage(index)}>
                    <img src={basura} alt="Eliminar" className="icon-basuraimg" />
                  </button>
                </button>
                
            ))}
            
            

            
            
            <button
              className="imag-placeholder"
              onClick={addImagePlaceholder}
            >
              +
            </button>
            
          </div>
          
          {/* Link */}
          <div className="Enlace-multimedia">
            <div className="text-link">
              <p>Si tienes un video o conoces de 
                algun video de tu receta, pega aquí
                el link:
              </p>
            </div>
            <div className="input-link">
              <input type="url" placeholder="url del video"/>
              <button className="agregar-link">agregar link</button>
            </div>
          </div>

        </div>

        {/* Descripción */}
        <div className="descripcion-section">
          <div className="descrip-tit">
            <h3>Describe tu receta</h3>
          </div>
          <form>
            <div className="nombretit-input">
              <h4>
                Nombre
              </h4>
            </div>

            <div className="inpunom">
              <input
                type="text"
                placeholder="Título de tu grandiosa y exquisita receta"
                className="input-titulo"
              />
            </div>
            
            <div className="desctit-input">
              <h4>
                Breve descripción
              </h4>
            </div>

            <div className="inpudesc">
              <textarea
                placeholder="Describe brevemente de qué es, cómo la descubriste, historia de dónde viene la receta o para que ocasiones preparas esta rica receta. El punto es que platiques sobre tu receta en esta sección, sé creativo :)"
                className="input-descripcion"
              />
            </div>
            

            {/* Ingredientes */}
            <div className="ingredientes">
              <div className="ingredientit-input">
                <h4>
                  Ingredientes
                </h4>
              </div>
              {ingredients.map((ingredient, index) => (
                //INPUT PARA ESCRIBIR INGREDIENTES
                <div key={`${ingredient.name}-${index}`} className="ingredient-arti">
                  <input
                    type="text"
                    className="input-ingrediente"
                    placeholder="Ingrediente"
                    value={ingredient.name || ""}
                    onChange={(e) =>
                      handleIngredientChange(index, "name", e.target.value)
                    }
                    onKeyDown={(e) => handleIngredientKeyDown(e, index)}
                  />

                  {/*BOTON DE AUMENTAR PIEZAS*/}
                  <button
                    type="button"
                    onClick={() => increaseQuantity(index)}
                    className="quantity-button"
                  >
                    +
                  </button>

                  {/*INPUT PARA GUARDAR LA CANTIDAD DE PIEZAS 
                  INGRESADAS POR EL USUARIO*/}
                  <input
                    type="text"
                    className="quantity-input"
                    value={ingredient.quantity}
                    onChange={(e) => {
                      const newValue = e.target.value; 
                      {/* Permite valores vacíos temporalmente, es decir, 
                        cuando borras la cantidad por default del input y se
                        ingresa otro valor, así el codigo permite valores null 
                        temporalmente hasta que el usuario ingrese una cantidad
                        deseada*/}
                      if (newValue === "") {
                        handleIngredientChange(index, "quantity", ""); // Almacena temporalmente  el valor como vacío
                      } else {
                        const parsedValue = parseInt(newValue, 10);
                        if (!isNaN(parsedValue)) {
                          handleIngredientChange(index, "quantity", parsedValue); // Actualiza con el valor ingresado
                        }
                      }
                    }}
                    //Cuando el usuario deja de interactuar con el campo se verifica si el valor es válido
                    onBlur={(e) => {
                      // Validar cuando el usuario deja el campo
                      if (e.target.value === "" || parseInt(e.target.value, 10) < 1) {
                        handleIngredientChange(index, "quantity", 1);
                      } // Restablece a 1 si está vacío o si es menor a 1
                    }}
                    onKeyDown={(e) => handleIngredientKeyDown(e, index)}
                  />
                  
                  {/*INPUT PARA LAS UNIDADES, GURDA EL ESTADO DE 
                  LO QUE INGRESE EL USUARIO EN INGREDIENTES*/}
                  <div className="contpadre-uni">
                    <input
                      type="text"
                      className="unidades"
                      placeholder="gr/kg/L/ml"
                      value={ingredient.unit || ""}
                      onChange={(e) =>
                        handleIngredientChange(index, "unit", e.target.value)
                      }
                      onKeyDown={(e) => handleIngredientKeyDown(e, index)}
                    />{/*Identifica el ingrediente que se está editando 
                      mediante index y actualiza la propiedad unit*/}
                  </div>
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(index)}
                    className="quantity-button"
                  >
                    -
                  </button>
                                  
                  {/* Botón de eliminar */}
                  <button
                    type="button"
                    onClick={() => deleteIngredient(index)} // Función para eliminar
                    className="delete-button"
                  >
                    <img src={basura} alt="Ibasura" className="icon-basura" />
                  </button>


                </div>
              ))}
              {/*BOTON PARA AGREGAR CAMPOS DE MÁS INGREDIENTES*/}
              <button type="button" onClick={addIngredient} className="addbutton-ing">
                +
              </button>
            </div>

            {/* Pasos */}
            <div className="pasos">
              
              <div className="pasostit-input">
                <h4>
                  Pasos
                </h4>
              </div>
              {steps.map((step, index) => (
                <div key={index} className="paso-paso">
                  <p className="pasobyp">
                  {`Paso ${index + 1}`}
                  </p>
                  <textarea
                    placeholder={`Paso ${index + 1}`}
                    value={step}
                    onChange={(e) => handleStepChange(index, e.target.value)}
                    onKeyDown={(e) => handleStepKeyDown(e, index)}
                    className="input-paso"
                  />
                  <button
                    type="button"
                    onClick={() => deleteStep(index)} // Función para eliminar
                    className="delete-buttonstep">
                    <img src={basura} alt="Ibasura" className="icon-basura" />
                  </button>
                </div>
              ))}
              <button className="addbutton-step" type="button" onClick={addStep}>
                +
              </button>
            </div>

            {/* Dificultad */}
            <div className="dificultit-input">
              <h4>
                Dificultad
              </h4>
            </div>
            <select className="difficultad">
              <option value="facil">Fácil</option>
              <option value="media">Media</option>
              <option value="dificil">Difícil</option>
            </select>

            <br />

            <button type="submit" className="boton-guardar">
              Guardar
            </button>
          </form>
        </div>

      </div>
    </div>
    
  );
};

export default RecipeForm;

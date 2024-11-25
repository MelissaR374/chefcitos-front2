const FavoriteRecipes = ({ recipes, favorites }) => {
    const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe));
  
    return (
      <div className="favorite-recipes">
        {favoriteRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    );
  };
  export default FavoriteRecipes;
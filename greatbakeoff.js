function chooseRecipe(bakeryA, bakeryB, recipes){
  for(const recipe of recipes){
    if(recipe.ingredients.some(r => bakeryA.indexOf(r) >= 0) && recipe.ingredients.some(r => bakeryB.indexOf(r) >= 0)){
      return recipe.name;
    };
  };
};

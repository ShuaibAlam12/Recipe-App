const api = 'd1370b8b98904576a69139704cfbaa5c';
const recipelistE1=document.querySelector("#recipe-list");






      
async function displayRecipes(recipes){
       for(let recipe of recipes){
        const recipeitemE1=document.createElement("li");
        recipeitemE1.classList.add("list-item");
         const recipeimgE1=document.createElement("img");
         recipeimgE1.src=recipe.image;
         recipeimgE1.alt="recipe.image";

        const recipetitleE1=document.createElement("h2");
        recipetitleE1.classList.add("title");
        recipetitleE1.innerHTML=recipe.title;
        
        const recipeingredietsE1=document.createElement("p");
        recipeingredietsE1.innerHTML=`<strong>Ingredients</strong>:${recipe.extendedIngredients.map((ingredient) => ingredient.original)
          .join(", ")}`
          const recipeLinkE1=document.createElement("a");
          recipeLinkE1.href=recipe.sourceUrl;
          recipeLinkE1.innerText="view details";

          recipeitemE1.appendChild(recipeimgE1);
          recipeitemE1.appendChild(recipetitleE1);
          recipeitemE1.appendChild(recipeingredietsE1);
          recipeitemE1.appendChild(recipeLinkE1);
          recipelistE1.appendChild(recipeitemE1);


       }
      
}






async function getrecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${api}`);
    const data = await response.json();
   return data.recipes;
     
}
async function init(){
     const recipes=await getrecipes();
     displayRecipes(recipes);
}
init();
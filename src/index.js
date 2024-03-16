function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: `Recipe goes here`,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let recipeInput = document.querySelector("#recipe-generator-form");
recipeInput.addEventListener("submit", generateRecipe);

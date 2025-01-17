const recipes = [
    {
      name: "Air Fryer Dino Nuggets",
      url: "recipe/air-fryer-dino-nuggets.html",
      vegan: false,
      type: "treat",
      prepTime: "quick",
      cuisine: "american",
    },
    {
      name: "Air Fryer Frozen Waffles",
      url: "recipe/air-fryer-frozen-waffles.html",
      vegan: false,
      type: "breakfast",
      prepTime: "quick",
      cuisine: "american",
    },
    {
      name: "Air Fryer Italian Sausages",
      url: "recipe/air-fryer-italian-sausages.html",
      vegan: false,
      type: "main",
      prepTime: "quick",
      cuisine: "american",
    },
    {
      name: "Instant Pot Asparagus",
      url: "recipe/instant-pot-asparagus.html",
      vegan: true,
      type: "main",
      prepTime: "detailed",
      cuisine: "vegan",
    },
    {
      name: "Instant Pot Broccoli",
      url: "recipe/instant-pot-broccoli.html",
      vegan: true,
      type: "side",
      prepTime: "quick",
      cuisine: "vegan",
    },
    {
      name: "Instant Pot Bacon",
      url: "recipe/instant-pot-bacon.html",
      vegan: false,
      type: "breakfast",
      prepTime: "quick",
      cuisine: "american",
    },
    {
      name: "Instant Pot Chicken and Noodles",
      url: "recipe/instant-pot-chicken-and-noodles.html",
      vegan: false,
      type: "main",
      prepTime: "detailed",
      cuisine: "american",
    },
    {
      name: "Instant Pot Cornbread",
      url: "recipe/instant-pot-cornbread.html",
      vegan: true,
      type: "treat",
      prepTime: "detailed",
      cuisine: "vegan",
    },
    {
      name: "Keto Chocolate Pudding",
      url: "recipe/keto-chocolate-pudding.html",
      vegan: true,
      type: "treat",
      prepTime: "detailed",
      cuisine: "keto",
    },
    {
      name: "Keto Chocolate Milk",
      url: "recipe/keto-chocolate-milk.html",
      vegan: true,
      type: "treat",
      prepTime: "quick",
      cuisine: "keto",
    },
    {
      name: "Keto Cream Cheese Frosting",
      url: "recipe/keto-cream-cheese-frosting.html",
      vegan: true,
      type: "treat",
      prepTime: "detailed",
      cuisine: "keto",
    },
    {
      name: "Peanut Butter Maple Syrup",
      url: "recipe/peanut-butter-maple-syrup.html",
      vegan: true,
      type: "breakfast",
      prepTime: "quick",
      cuisine: "american",
    },
    {
      name: "Shrimp Omelette",
      url: "recipe/shrimp-omelette.html",
      vegan: false,
      type: "breakfast",
      prepTime: "quick",
      cuisine: "american",
    },
    {
      name: "Sweet Potato Waffles",
      url: "recipe/sweet-potato-waffles.html",
      vegan: true,
      type: "breakfast",
      prepTime: "quick",
      cuisine: "vegan",
    },
    {
      name: "Vegan Apple Crisp",
      url: "recipe/vegan-apple-crisp.html",
      vegan: true,
      type: "treat",
      prepTime: "detailed",
      cuisine: "vegan",
    },
    {
      name: "Vegan Oatmeal Cookies",
      url: "recipe/vegan-oatmeal-cookies.html",
      vegan: true,
      type: "treat",
      prepTime: "detailed",
      cuisine: "vegan",
    },
  ];

  function getRecipeRecommendation() {
    const vegan = document.querySelector(
      'input[name="vegan"]:checked'
    )?.value;
    const mealType = document.querySelector(
      'input[name="meal-type"]:checked'
    )?.value;
    const prepTime = document.querySelector(
      'input[name="prep-time"]:checked'
    )?.value;
    const cuisine = document.querySelector(
      'input[name="cuisine"]:checked'
    )?.value;

    const filteredRecipes = recipes.filter(
      (recipe) =>
        (vegan === "yes" ? recipe.vegan : true) &&
        recipe.type === mealType &&
        recipe.prepTime === prepTime &&
        recipe.cuisine === cuisine
    );

    const resultDiv = document.getElementById("result");
    if (filteredRecipes.length > 0) {
      const selectedRecipe =
        filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)];
      resultDiv.innerHTML = `Recommended Recipe: <a href="${selectedRecipe.url}">${selectedRecipe.name}</a>`;
    } else {
      resultDiv.innerHTML =
        "Sorry, no matching recipes found.";
    }
}

    function gotoCopyright() {
        window.location.href = "copyright.pdf";
    }

    function gotoLog() {
        window.location.href = "log.pdf";
    }
const db = require("./dbConfig");

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
    return db("recipes")
    .join("ingredients", "recipes.id", "ingredients.recipe_id")
    .select("ingredients.Name")
    .where({"recipes.id": id});
}

function getInstructions(id) {
    return db("recipes")
    .select("steps.step_number", "steps.instructions")
    .join("steps", {"recipes.id": "steps.recipe_id"})
    .where({"recipes.id": id});
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
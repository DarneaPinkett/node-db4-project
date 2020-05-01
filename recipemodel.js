const db = require("./dbConfig");

function getRecipes() {
    return db("recipes");
}

module.exports = {
    getRecipes
}
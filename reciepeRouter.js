const express = require("express");

const Recipes = require("./recipemodel");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(error => {
        res.status(500).json({ Message: "Failed to retrieve recipes"})
    })
})

module.exports = router;
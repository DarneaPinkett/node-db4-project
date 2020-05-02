const express = require("express");

const db = require("./recipemodel");

const router = express.Router();

router.get("/", (req, res) => {
    db.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(error => {
        res.status(500).json({ Message: "Failed to retrieve recipes"})
    })
})

router.get('/:id/ingredients', (req, res) =>{
    const {id} = req.params
    db.getShoppingList(id)
    .then(ingredients => {
        res.status(200).json(ingredients)
    })
    .catch(err => {
        res.status(500).json({Error: "Failed to get shopping list for recipe"})
    })
})

router.get('/:id/steps', (req, res) =>{
    const {id} = req.params
    db.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps)
    })
    .catch(err => {
        res.status(500).json({Error: "Failed to get instructions for recipe"})
    })
})

module.exports = router;
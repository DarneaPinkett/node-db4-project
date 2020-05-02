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

router.get('/:id/shoppingList', (req, res) =>{
    const {id} = req.params
    db.getShoppingList(id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({Error: "Faild to get shopping list for recipe"})
    })
})

module.exports = router;
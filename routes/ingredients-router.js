const router = require('express').Router();

const Ingredients = require("../models/ingredients-model");

router.get("/", (req, res) => {
    Ingredients.get()
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(500).json({ error: "Failed to get all ingredients." }))
});

router.get("/:id", (req, res) => {
    Ingredients.get(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: "Failed to get ingredient." }))
});

router.post("/", (req, res) => {
    Ingredients.add(req.body)
    .then(newIngredient => res.status(201).json(newIngredient))
    .catch(err => res.status(500).json({ error: "Failed to add new ingredient." }))
});

router.put("/:id", (req, res) => {
    Ingredients.update(req.params.id, req.body)
    .then(updatedIngredient => res.status(201).json(updatedIngredient))
    .catch(err => res.status(500).json({ error: "Failed to update ingredient." }))
});

router.delete("/:id", (req, res) => {
    Ingredients.remove(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to remove ingredient from database." }))
});

module.exports = router;
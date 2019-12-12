exports.seed = function(knex) {
    return knex('instructions').insert([
      { "steps": 'instructions', "step_number": 1, "recipe_id": 1 },
      { "steps": 'instructions 0', "step_number": 2, "recipe_id": 1 },
      { "steps": 'instructions 1', "step_number": 3, "recipe_id": 1 },
      { "steps": 'instructions 2', "step_number": 4, "recipe_id": 1 },
      { "steps": 'instructions 3', "step_number": 1, "recipe_id": 2 },
      { "steps": 'instructions 4', "step_number": 2, "recipe_id": 2 },
      { "steps": 'instructions 5', "step_number": 3, "recipe_id": 2 },
      { "steps": 'instructions 6', "step_number": 4, "recipe_id": 2 },
      { "steps": 'instructions 7', "step_number": 1, "recipe_id": 3 },
      { "steps": 'instructions 8', "step_number": 2, "recipe_id": 3 },
      { "steps": 'instructions 9', "step_number": 3, "recipe_id": 3 },
      { "steps": 'instructions 10', "step_number": 4, "recipe_id": 3 },
      { "steps": 'instructions 11', "step_number": 5, "recipe_id": 3 },
      { "steps": 'instructions 12', "step_number": 6, "recipe_id": 3 },
      { "steps": 'instructions 13', "step_number": 1, "recipe_id": 4 },
      { "steps": 'instructions 14', "step_number": 2, "recipe_id": 4 },
      { "steps": 'instructions 15', "step_number": 3, "recipe_id": 4 },
      { "steps": 'instructions 16', "step_number": 4, "recipe_id": 4 },
      { "steps": 'instructions 17', "step_number": 5, "recipe_id": 4 },
      { "steps": 'instructions 18', "step_number": 6, "recipe_id": 4 },
      { "steps": 'instructions 19', "step_number": 7, "recipe_id": 4 }
    ]);
};
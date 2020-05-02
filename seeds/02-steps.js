
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: 'Pick and Open Box of Cereal', recipe_id: 1,},
        {step_number: 2, instructions: 'Pour Cereal into bowl', recipe_id: 1,},
        {step_number: 3, instructions: 'Add milk', recipe_id: 1},
        {step_number: 1, instructions: 'Gather ingredients', recipe_id: 2,},
        {step_number: 2, instructions: 'Take one slice of bread spread peanut butter on it', recipe_id: 2,},
        {step_number: 3, instructions: 'Take 2nd slice of bread spread jelly', recipe_id: 2},
        {step_number: 4, instructions: 'Place both slices of bread together', recipe_id: 2}
      ]);
    });
};

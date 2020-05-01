
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {Name: 'cereal', recipe_id: 1},
        {Name: 'milk', recipe_id: 1},
        {Name: 'bread', recipe_id: 2},
        {Name: 'jelly', recipe_id: 2},
        {Name: 'peanut butter', recipe_id: 2},

      ]);
    });
};

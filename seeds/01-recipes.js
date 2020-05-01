
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {Name: 'How To Make Bowl of Cereal'},
        {Name: 'How To Make PB&J'}
      ]);
    });
};

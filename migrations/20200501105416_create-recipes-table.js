
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string("Name", 128)
      .unique()
      .notNullable();
  })
  .createTable("steps", tbl => {
      tbl.increments();
      tbl.integer('step_number')
      .notNullable();
      tbl.text('instructions')
      .notNullable();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("Name", 128)
      .notNullable();
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("recipes");
};

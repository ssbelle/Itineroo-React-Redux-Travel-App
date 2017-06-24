exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.string('city');
    table.json('places_data');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips');
};

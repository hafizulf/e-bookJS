const tableName = 'roles';

exports.up = async (knex) => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exists');
    return;
  }

  return knex.schema.createTable(tableName, (table) => {
    table.uuid('role_id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('role', 30).notNullable();
    table.text('desc');
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};

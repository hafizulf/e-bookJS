const tableName = 'roles';

exports.up = async knex => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exists');
    return;
  }

  return knex.schema.createTable(tableName, table => {
    table.increments('role_id').unsigned();
    table.string('role', 30).notNullable();
    table.text('desc');
  });
};

exports.down = async knex => {
  return knex.schema.dropTableIfExists(tableName);
};

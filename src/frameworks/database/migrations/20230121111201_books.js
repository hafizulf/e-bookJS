const tableName = 'books';

exports.up = async (knex) => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exist');
    return;
  }

  return knex.schema.createTable(tableName, (table) => {
    table.uuid('book_id').primary();
    table.string('title', 200).notNullable();
    table.string('slug', 255).notNullable();
    table.string('author', 128).notNullable();
    table.string('city', 50);
    table.string('publisher', 50);
    table.string('year', 4);
    table.string('type', 50);
    table.text('file').notNullable();
    table.text('desc');
  });
};

exports.down = async (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};

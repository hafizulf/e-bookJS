const tableName = 'users'

module.exports.up = async knex => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exist')
    return
  }

  return knex.schema.createTable(tableName, table => {
    table.increments('userId').unsigned()
    table.string('name', 50)
    table.string('username', 50).notNullable()
    table.string('email', 50).notNullable()
    table.string('password', 128).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

module.exports.down = async knex => {
  return knex.schema.dropTableIfExists(tableName)
}

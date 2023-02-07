const tableName = 'users_access'

exports.up = async knex => {
  if (await knex.schema.hasTable(tableName)) {
    console.log('table already exist')
    return
  }

  return knex.schema.createTable(tableName, table => {
    table.increments('user_access_id').unsigned()
    table.integer('user_id', 9).notNullable()
    table.integer('role_id', 9).notNullable()
  })
}

exports.down = async knex => {
  return knex.schema.dropTableIfExists(tableName)
}

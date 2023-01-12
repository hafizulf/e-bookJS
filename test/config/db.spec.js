const { DB_HOST, DB_USER, DB_DATABASE } = require('../../src/config/db')

describe('test db connection', () => {
  it('should return localhost', () => {
    expect(DB_HOST).toBe('localhost')
  })
  it('should return db user', () => {
    expect(DB_USER).toBe('root')
  })
  it('should return db name', () => {
    expect(DB_DATABASE).toBe('ebookjs_dbtest')
  })
})

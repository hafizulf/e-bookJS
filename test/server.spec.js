const request = require('supertest')

describe('App server test', () => {
  let app = require('../src/server')

  it('should return E-bookJS App!', async () => {
    const res = await request(app).get('/').expect(200)
    expect(res.text).toBe('E-bookJS App!')
  })
})

const request = require('supertest')

describe('App server test', () => {
  let app

  beforeEach(() => {
    app = require('../src/server')
  })

  afterEach(done => {
    app.close(done)
  })

  it('should return hello world', () => {
    return request(app).get('/').expect(200)
  })
})

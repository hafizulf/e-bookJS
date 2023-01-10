const request = require('supertest')

describe('App server test', () => {
  let app = require('../src/server')

  it('should return E-bookJS App!', () => {
    return request(app)
      .get('/')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('E-bookJS App!')
      })
  })
})

const request = require('supertest')

describe('App server test', () => {
  let app = require('../src/server')

  it('should return E-bookJS App!', async () => {
    const res = await request(app).get('/').expect(200)
    expect(res.text).toBe('E-bookJS App!')
  })

  it('retrive list of books - empty data', () => {
    request(app)
      .get('/koneksi')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual({ data: 'no record found' })
      })
  })
})

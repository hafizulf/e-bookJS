const chai = require('chai')
const request = require('supertest')

const { expect } = chai

describe('books API', () => {
  let app = require('../src/frameworks/app')

  describe('Main App', () => {
    it('should respond successfully to /', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then(res => {
          expect(res.text).to.equal('E-bookJS App!')
        })
    })
  })
})

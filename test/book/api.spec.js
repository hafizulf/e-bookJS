let chai,
  { expect } = require('chai')
const sinon = require('sinon')
const request = require('supertest')

const app = require('../../src/frameworks/app')
const { bookRepository } = require('../../src/repositories')

describe('books API', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('/books', () => {
    it("should return empty array if result doesn't exist", done => {
      sinon.stub(bookRepository, 'findAll').resolves([])

      request(app)
        .get('/books')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.deep.equal({ data: [] })
          done()
        })
    })

    it('should return list of books', done => {
      let mockObject = [
        {
          title: 'Naruto',
          author: 'Masashi KishiMoto'
        },
        {
          title: 'One Piece',
          author: 'Eichiro Oda'
        }
      ]

      sinon.stub(bookRepository, 'findAll').resolves(mockObject)

      request(app)
        .get('/books')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.deep.equal({ data: mockObject })
          done()
        })
    })
  })
})

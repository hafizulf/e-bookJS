let chai,
  { expect } = require('chai')
const sinon = require('sinon')

const { bookRepository } = require('../../src/repositories')
const bookService = require('../../src/use-cases/book')

describe('book use cases', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('Find Books', () => {
    it('should find all books successfully', () => {
      const stubFindAll = sinon
        .stub(bookRepository, 'findAll')
        .returns({ data: [] })

      const books = bookService.findAll()

      expect(stubFindAll.calledOnce).to.be.true
      expect(books).to.eql({ data: [] })
    })
  })
})

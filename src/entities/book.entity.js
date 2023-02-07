module.exports.BookEntity = class BookEntity {
  constructor ({ title, author, city, publisher, year, type, file, desc }) {
    this.title = title
    this.author = author
    this.city = city
    this.publisher = publisher
    this.year = year
    this.type = type
    this.file = file
    this.desc = desc
  }

  validate () {
    if (!this.title) throw new Error('title is required')
    if (!this.author) throw new Error('author is required')
    //  ....
    return true
  }
}

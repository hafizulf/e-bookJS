class Book {
  constructor({
    book_id,
    title,
    slug,
    author,
    city,
    publisher,
    year,
    type,
    file,
    desc,
  }) {
    this.book_id = book_id;
    this.title = title;
    this.slug = slug;
    this.author = author;
    this.city = city;
    this.publisher = publisher;
    this.year = year;
    this.type = type;
    this.file = file;
    this.desc = desc;
  }

  save() {
    return {
      title: this.title,
      slug: this.slug,
      author: this.author,
      city: this.city || null,
      publisher: this.publisher || null,
      year: this.year || null,
      type: this.type || null,
      file: this.file,
      desc: this.desc || null,
    };
  }

  update() {
    const book = {};

    if (this.book_id) book.book_id = this.book_id;
    if (this.title) book.title = this.title;
    if (this.slug) book.slug = this.slug;
    if (this.author) book.author = this.author;
    if (this.city) book.city = this.city;
    if (this.publisher) book.publisher = this.publisher;
    if (this.year) book.year = this.year;
    if (this.type) book.type = this.type;
    if (this.file) book.file = this.file;
    if (this.desc) book.desc = this.desc;

    return book;
  }
}

module.exports = Book;

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

  update(data) {
    const book = {};

    if (data.book_id) book['book_id'] = this.book_id;
    if (data.title) book['title'] = this.title;
    if (data.slug) book['slug'] = this.slug;
    if (data.author) book['author'] = this.author;
    if (data.city) book['city'] = this.city;
    if (data.publisher) book['publisher'] = this.publisher;
    if (data.year) book['year'] = this.year;
    if (data.type) book['type'] = this.type;
    if (data.file) book['file'] = this.file;
    if (data.desc) book['desc'] = this.desc;

    return book;
  }
}

module.exports = Book;

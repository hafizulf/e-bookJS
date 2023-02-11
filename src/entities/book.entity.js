class Book {
  constructor({
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
    this.title = title;
    this.slug = slug;
    this.author = author;
    this.city = city || null;
    this.publisher = publisher || null;
    this.year = year || null;
    this.type = type || null;
    this.file = file;
    this.desc = desc || null;
  }
}

module.exports = Book;

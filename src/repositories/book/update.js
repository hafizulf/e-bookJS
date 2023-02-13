const repositoryUpdate = (database, tableName) => {
  return (entity) => {
    const book = {
      book_id: entity.getBookId(),
      title: entity.getTitle(),
      slug: entity.getSlug(),
      author: entity.getAuthor(),
      city: entity.getCity(),
      publisher: entity.getPublisher(),
      year: entity.getYear(),
      type: entity.getType(),
      file: entity.getFile(),
      desc: entity.getDesc(),
    };

    return database
      .update(book)
      .table(tableName)
      .where('book_id', book.book_id);
  };
};

module.exports = repositoryUpdate;

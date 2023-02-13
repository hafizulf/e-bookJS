const repositorySave = (database, tableName) => {
  return (entity) => {
    const book = {
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

    return database.insert(book).table(tableName);
  };
};

module.exports = repositorySave;

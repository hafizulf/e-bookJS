const book = ({
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
}) => {
  return {
    getBookId: () => book_id,
    getTitle: () => title,
    getSlug: () => slug,
    getAuthor: () => author,
    getCity: () => city,
    getPublisher: () => publisher,
    getYear: () => year,
    getType: () => type,
    getFile: () => file,
    getDesc: () => desc,
  };
};

module.exports = book;

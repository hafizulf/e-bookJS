const serviceDeleteOne = (repository) => {
  return async (book_id) => {
    await repository.deleteOne(book_id);
  };
};
module.exports = serviceDeleteOne;

const serviceDeleteOne = (repository, fileRemover) => {
  return async (book_id) => {
    const user = await repository.findOne({ name: 'book_id', value: book_id });

    if (!user) {
      return {
        status: false,
        message: 'Book Not Found',
      };
    } else {
      await repository.deleteOne(book_id);
      fileRemover(user.file);

      return {
        status: true,
        message: 'Book has been deleted',
      };
    }
  };
};
module.exports = serviceDeleteOne;

const ctlDeleteOne = (service) => {
  return async (req, res) => {
    const { book_id } = req.params;
    const result = await service.findOne({ name: 'book_id', value: book_id });

    if (!result.length) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'Book Not Found',
      });
    } else {
      await service.deleteOne(book_id);

      return res.status(200).json({
        status: 'OK',
        code: 200,
        message: 'Book has been deleted',
      });
    }
  };
};

module.exports = ctlDeleteOne;

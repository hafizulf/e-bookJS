const ctlDeleteOne = (service) => {
  return async (req, res) => {
    const { id } = req.params;
    const result = await service.findOne({ name: 'book_id', value: id });

    if (result.length <= 0) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'Book Not Found',
      });
    } else {
      return res.status(200).json({
        status: 'OK',
        code: 200,
        message: 'Book has been deleted',
      });
    }
  };
};

module.exports = ctlDeleteOne;

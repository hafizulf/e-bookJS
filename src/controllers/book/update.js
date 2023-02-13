const ctlUpdate = (service) => {
  return async (req, res) => {
    const { book_id } = req.params;

    const result = await service.findOne({ name: 'book_id', value: book_id });

    if (result.length === 0) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'Book Not Found',
      });
    }
  };
};

module.exports = ctlUpdate;

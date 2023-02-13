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
    } else {
      const data = req.body;
      const result = await service.update(data);

      if (result.status) {
        return res.json({
          message: 'ok',
        });
      } else {
        return res.status(400).json({
          status: 'BAD_REQUEST',
          code: 400,
          errors: result.errors,
        });
      }
    }
  };
};

module.exports = ctlUpdate;

const ctlUpdate = (service) => {
  return async (req, res, next) => {
    const { book_id } = req.params;
    this.result = await service.findOne({ name: 'book_id', value: book_id });

    if (!this.result.length) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'Book Not Found',
      });
    } else {
      const data = req.body;
      data['book_id'] = book_id;
      if (req.file !== undefined) {
        data['file'] = req.file;
      }

      if (Object.keys(data).length === 1) {
        return res.status(400).json({
          status: 'BAD_REQUEST',
          code: 400,
          message: 'Need a field to update',
        });
      }

      const oldFile = this.result[0].file;
      const result = await service.update(data, oldFile);

      if (result.status) {
        return res.status(200).json({
          status: 'OK',
          code: 200,
          message: 'Book has been updated',
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

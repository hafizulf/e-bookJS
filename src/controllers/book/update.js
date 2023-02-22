const ctlUpdate = (service) => {
  return async (req, res, next) => {
    const { book_id } = req.params;
    const data = req.body;

    data.book_id = book_id;
    if (req.file !== undefined) {
      data.file = req.file;
    }

    const { status, message, errors } = await service.update(data);

    if (status) {
      return res.status(200).json({
        status: 'OK',
        code: 200,
        message,
      });
    } else {
      const response = {
        status: 'BAD_REQUEST',
        code: 400,
      };
      message ? (response.message = message) : (response.errors = errors);

      return res.status(400).json(response);
    }
  };
};

module.exports = ctlUpdate;

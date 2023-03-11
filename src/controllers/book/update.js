const ctlUpdate = (service, response) => {
  return async (req, res) => {
    const { book_id } = req.params;
    const data = req.body;

    data.book_id = book_id;
    if (req.file !== undefined) {
      data.file = req.file;
    }

    const { status, message, errors } = await service.update(data);

    if (status) {
      response.success(res, message);
    } else {
      message
        ? response.updateFailed(res, 'message', message)
        : response.updateFailed(res, 'errors', errors);
    }
  };
};

module.exports = ctlUpdate;

const ctlDeleteOne = (service, response) => {
  return async (req, res) => {
    const { book_id } = req.params;
    const { status, message } = await service.deleteOne(book_id);

    status
      ? response.success(res, message)
      : response.deleteFailed(res, message);
  };
};

module.exports = ctlDeleteOne;

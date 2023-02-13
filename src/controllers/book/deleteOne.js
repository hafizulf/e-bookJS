const ctlDeleteOne = (service) => {
  return async (req, res) => {
    // check if data is exist
    const { id } = req.params;
    const result = await service.findOne({ name: 'book_id', value: id });

    const response = {
      status: 'BAD_REQUEST',
      code: 400,
    };

    if (result.length <= 0) {
      response['message'] = 'Book Not Found';
      return res.status(400).json(response);
    }
  };
};

module.exports = ctlDeleteOne;

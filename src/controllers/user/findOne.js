const ctlFind = (service) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const { data, message } = await service.findOne({
      name: 'user_id',
      value: user_id,
    });

    const response = {
      status: 'OK',
      code: 200,
    };
    data ? (response.data = data) : (response.message = message);

    return res.status(200).json(response);
  };
};

module.exports = ctlFind;

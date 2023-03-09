const ctlFindOne = (service) => {
  return async (req, res) => {
    const { role_id } = req.params;

    const { data, message } = await service.findOne({
      name: 'role_id',
      value: role_id,
    });

    const response = {
      status: 'OK',
      code: 200,
    };

    data ? (response.data = data) : (response.message = message);

    return res.status(200).json(response);
  };
};

module.exports = ctlFindOne;

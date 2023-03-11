const ctlFind = (service, response) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const { data, message } = await service.findOne({
      name: 'user_id',
      value: user_id,
    });

    data
      ? response.successFindOne(res, 'data', data)
      : response.successFindOne(res, 'message', message);
  };
};

module.exports = ctlFind;

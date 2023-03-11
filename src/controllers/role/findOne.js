const ctlFindOne = (service, response) => {
  return async (req, res) => {
    const { role_id } = req.params;
    const { data, message } = await service.findOne(role_id);

    data
      ? response.successFindOne(res, 'data', data)
      : response.successFindOne(res, 'message', message);
  };
};

module.exports = ctlFindOne;

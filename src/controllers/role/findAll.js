const ctlFindAll = (service, response) => {
  return async (req, res) => {
    const result = await service.findAll();

    response.successFindAll(res, result.data);
  };
};

module.exports = ctlFindAll;

const ctlFindAll = (service) => {
  return async (req, res) => {
    const result = await service.findAll();
    const response = {
      status: 'OK',
      code: 200,
      data: result.data,
    };

    return res.status(200).json(response);
  };
};

module.exports = ctlFindAll;

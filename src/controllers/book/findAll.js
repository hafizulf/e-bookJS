const ctlFindAll = (service) => {
  return async (req, res) => {
    const result = await service.findAll();

    return res.status(200).json({
      status: 'OK',
      code: 200,
      data: result,
    });
  };
};

module.exports = ctlFindAll;

const ctlFindAll = (service) => {
  return async (req, res) => {
    const filter = {
      currentPage: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      search: req.query.search || '',
    };

    const result = await service.findAll(filter);
    const response = {
      status: 'OK',
      code: 200,
      data: result.data,
    };

    if (result.pagination) {
      response.pagination = result.pagination;
    }

    return res.status(200).json(response);
  };
};

module.exports = ctlFindAll;

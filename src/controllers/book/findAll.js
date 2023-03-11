const ctlFindAll = (service, response) => {
  return async (req, res) => {
    const filter = {
      currentPage: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      search: req.query.search || '',
    };

    const result = await service.findAll(filter);

    result.pagination
      ? response.successFindAllPagination(res, result.data, result.pagination)
      : response.successFindAllPagination(res, result.data);
  };
};

module.exports = ctlFindAll;

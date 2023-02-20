const findAllCtl = (service, paginate) => {
  return async (req, res) => {
    const totalRow = await service.countAll();
    const currentPage = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const page = paginate(totalRow, currentPage, limit);
    const result = await service.findAll({ limit, offset: page.start, search });

    let response = {
      status: 'OK',
      code: 200,
      data: result,
    };

    if (result.length !== 0) {
      response.pagination = page.pagination;
    }

    return res.status(200).json(response);
  };
};

module.exports = findAllCtl;

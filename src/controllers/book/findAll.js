const ctlFindAll = (service, paginate) => {
  return async (req, res) => {
    const totalRow = await service.countAll();
    const currentPage = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; // 10 is default limit

    const page = paginate(totalRow, currentPage, limit);
    const result = await service.findAll({ limit, offset: page.start });

    return res.status(200).json({
      status: 'OK',
      code: 200,
      data: result,
      pagination: page.pagination,
    });
  };
};

module.exports = ctlFindAll;

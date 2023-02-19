const ctlFind = (service, paginate) => {
  return async (req, res) => {
    const { slug } = req.query;

    if (slug) {
      const result = await service.findOne({ name: 'slug', value: slug });

      let response = {
        status: 'OK',
        code: 200,
        data: result,
      };

      if (!result) response['message'] = 'Book Not Found';
      return res.status(200).json(response);
    } else {
      const { totalRow } = await service.countAll();
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
    }
  };
};

module.exports = ctlFind;

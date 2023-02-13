const ctlFind = (service) => {
  return async (req, res) => {
    const { slug } = req.query;

    if (slug) {
      const result = await service.findOne({ name: 'slug', value: slug });

      let response = {
        status: 'OK',
        code: 200,
        data: result[0],
      };

      if (result.length <= 0) response['message'] = 'Book Not Found';
      return res.status(200).json(response);
    } else {
      const result = await service.findAll();

      return res.status(200).json({
        status: 'OK',
        code: 200,
        data: result,
      });
    }
  };
};

module.exports = ctlFind;

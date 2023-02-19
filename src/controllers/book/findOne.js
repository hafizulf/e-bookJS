const ctlFind = (service, paginate) => {
  return async (req, res) => {
    const { slug } = req.params;
    const result = await service.findOne({ name: 'slug', value: slug });

    let response = {
      status: 'OK',
      code: 200,
      data: result,
    };

    if (!result) response.message = 'Book Not Found';
    return res.status(200).json(response);
  };
};

module.exports = ctlFind;

const ctlFindOne = (service) => {
  return async (req, res) => {
    const { slug } = req.params;
    const { data, message } = await service.findOne({
      name: 'slug',
      value: slug,
    });

    let response = {
      status: 'OK',
      code: 200,
    };
    data ? (response.data = data) : (response.message = message);

    return res.status(200).json(response);
  };
};

module.exports = ctlFindOne;

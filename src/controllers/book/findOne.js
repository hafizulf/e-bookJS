const ctlFindOne = (service, response) => {
  return async (req, res) => {
    const { slug } = req.params;
    const { data, message } = await service.findOne({
      name: 'slug',
      value: slug,
    });

    data
      ? response.successFindOne(res, 'data', data)
      : response.successFindOne(res, 'message', message);
  };
};

module.exports = ctlFindOne;

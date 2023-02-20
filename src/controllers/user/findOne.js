const ctlFind = (service) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const result = await service.findOne({ name: 'user_id', value: user_id });

    let response = {
      status: 'OK',
      code: 200,
      data: result,
    };

    if (!result) response.message = 'User Not Found';
    return res.status(200).json(response);
  };
};

module.exports = ctlFind;

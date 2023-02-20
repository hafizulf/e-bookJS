const saveCtl = (service) => {
  return async (req, res) => {
    const { body } = req;
    const result = await service.save(body);

    if (result.status) {
      res.status(201).json({
        status: 'CREATED',
        code: 201,
        message: 'User has been created',
      });
    } else {
      res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        errors: result.errors,
      });
    }
  };
};

module.exports = saveCtl;

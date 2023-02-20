const ctlSave = (service) => {
  return async (req, res) => {
    const data = req.body;
    const result = await service.save(data);

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

module.exports = ctlSave;

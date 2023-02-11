const ctlSave = (service) => {
  return async (req, res) => {
    const data = req.body;
    const response = await service.save(data);

    // check if status is true
    if (response.status) {
      return res.status(201).json({
        status: 'CREATED',
        code: 201,
        message: 'Book has been created',
      });
    } else {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        errors: response.errors,
      });
    }
  };
};

module.exports = ctlSave;

const ctlSave = (service) => {
  return async (req, res) => {
    const data = req.body;
    const file = req.file;

    if (file) data['file'] = file;

    const result = await service.save(data);

    // check if status is true
    if (result.status) {
      return res.status(201).json({
        status: 'CREATED',
        code: 201,
        message: 'Book has been created',
      });
    } else {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        errors: result.errors,
      });
    }
  };
};

module.exports = ctlSave;

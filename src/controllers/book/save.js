const ctlSave = (service) => {
  return async (req, res) => {
    const data = req.body;
    const file = req.file;

    if (file) data.file = file;

    const { status, message, errors } = await service.save(data);

    // check if status is true
    if (status) {
      return res.status(201).json({
        status: 'CREATED',
        code: 201,
        message,
      });
    } else {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        errors,
      });
    }
  };
};

module.exports = ctlSave;

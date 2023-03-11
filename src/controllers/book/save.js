const ctlSave = (service, response) => {
  return async (req, res) => {
    const data = req.body;
    const file = req.file;

    if (file) data.file = file;
    const { status, message, errors } = await service.save(data);

    status ? response.created(res, message) : response.postFailed(res, errors);
  };
};

module.exports = ctlSave;

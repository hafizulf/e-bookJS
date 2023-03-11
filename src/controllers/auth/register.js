const ctlRegister = (service, response) => {
  return async (req, res) => {
    const { status, message, errors } = await service.save(req.body);
    status ? response.created(res, message) : response.postFailed(res, errors);
  };
};

module.exports = ctlRegister;

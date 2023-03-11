const ctlUpdate = (service, response) => {
  return async (req, res) => {
    const { role_id } = req.params;
    const data = req.body;
    data.role_id = role_id;

    const { status, message, errors } = await service.update(data);

    if (status) {
      response.success(res, message);
    } else {
      message
        ? response.updateFailed(res, 'message', message)
        : response.updateFailed(res, 'errors', errors);
    }
  };
};

module.exports = ctlUpdate;

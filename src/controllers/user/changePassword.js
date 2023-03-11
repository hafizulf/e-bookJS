const ctlChangePassword = (service, response) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const data = req.body;
    data.user_id = user_id;

    const { status, message, errors } = await service.changePassword(data);

    if (status) {
      response.success(res, message);
    } else {
      message
        ? response.updateFailed(res, 'message', message)
        : response.updateFailed(res, 'errors', errors);
    }
  };
};

module.exports = ctlChangePassword;

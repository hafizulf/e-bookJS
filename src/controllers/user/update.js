const ctlUpdate = (service, response) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const { user_id: user_id_token } = req;

    if (user_id !== user_id_token) {
      return response.updateFailed(res, 'message', 'User Not Found');
    }

    const data = req.body;
    data.user_id = user_id;

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

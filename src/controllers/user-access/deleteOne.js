const ctlDeleteOne = (service, response) => {
  return async (req, res) => {
    const { user_access_id } = req.params;
    const { status, message } = await service.deleteOne(user_access_id);

    status
      ? response.success(res, message)
      : response.deleteFailed(res, message);
  };
};

module.exports = ctlDeleteOne;

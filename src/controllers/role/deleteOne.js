const ctlDeleteOne = (service, response) => {
  return async (req, res) => {
    const { role_id } = req.params;
    const { status, message } = await service.deleteOne(role_id);

    status
      ? response.success(res, message)
      : response.deleteFailed(res, message);
  };
};

module.exports = ctlDeleteOne;

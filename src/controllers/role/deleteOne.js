const ctlDeleteOne = (service) => {
  return async (req, res) => {
    const { role_id } = req.params;
    const { status, message } = await service.deleteOne(role_id);

    if (status) {
      return res.status(200).json({
        status: 'OK',
        code: 200,
        message: message,
      });
    } else {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: message,
      });
    }
  };
};

module.exports = ctlDeleteOne;

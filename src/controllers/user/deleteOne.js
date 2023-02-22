const ctlDeleteOne = (service) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const { status, message } = await service.deleteOne(user_id);

    if (status) {
      return res.status(200).json({
        status: 'OK',
        code: 200,
        message,
      });
    } else {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message,
      });
    }
  };
};

module.exports = ctlDeleteOne;

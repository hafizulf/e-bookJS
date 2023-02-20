const ctlDeleteOne = (service) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const result = await service.findOne({ name: 'user_id', value: user_id });

    if (!result) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'User Not Found',
      });
    } else {
      await service.deleteOne(user_id);

      return res.status(200).json({
        status: 'OK',
        code: 200,
        message: 'User has been deleted',
      });
    }
  };
};

module.exports = ctlDeleteOne;

const ctlUpdate = (service) => {
  return async (req, res) => {
    const { user_id } = req.params;
    const user = await service.findOne({ name: 'user_id', value: user_id });

    if (!user) {
      return res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        message: 'User Not Found',
      });
    } else {
      const data = req.body;
      data.user_id = user_id;

      if (Object.keys(data).length === 1) {
        return res.status(400).json({
          status: 'BAD_REQUEST',
          code: 400,
          message: 'Need a field to update',
        });
      } else {
        const result = await service.update(data);

        if (result.status) {
          return res.status(200).json({
            status: 'OK',
            code: 200,
            message: 'User has been updated',
          });
        } else {
          return res.status(400).json({
            status: 'BAD_REQUEST',
            code: 400,
            errors: result.errors,
          });
        }
      }
    }
  };
};

module.exports = ctlUpdate;

const ctlLogin = (service) => {
  return async (req, res) => {
    const result = await service.login(req.body);

    if (result.status) {
      return res.status(200).json({
        status: 'OK',
        code: 200,
        token: result.token,
      });
    } else {
      if (result.type === 'unauthorized') {
        return res.status(401).json({
          status: 'Unauthorized',
          code: 401,
          message: result.message,
        });
      }

      const response = {
        status: 'BAD_REQUEST',
        code: 400,
      };

      result.errors
        ? (response.errors = result.errors)
        : (response.message = result.message);

      return res.status(400).json(response);
    }
  };
};

module.exports = ctlLogin;

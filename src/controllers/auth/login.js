const ctlLogin = (service, response) => {
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

      result.message
        ? response.updateFailed(res, 'message', result.message)
        : response.updateFailed(res, 'errors', result.errors);
    }
  };
};

module.exports = ctlLogin;

const saveCtl = (service) => {
  return (req, res) => {
    const { body } = req;
    const result = service.save(body);

    if (result.status === false) {
      res.status(400).json({
        status: 'BAD_REQUEST',
        code: 400,
        errors: result.errors,
      });
    }
  };
};

module.exports = saveCtl;

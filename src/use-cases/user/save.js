const saveService = (buildError, validator, repository) => {
  return (user) => {
    try {
      validator.save(user);

      console.log('ok');
    } catch (err) {
      const errors = buildError(err.inner);
      return {
        status: false,
        errors: errors,
      };
    }
  };
};

module.exports = saveService;

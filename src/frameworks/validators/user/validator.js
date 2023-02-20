const userValidator = (rules) => {
  return (data) => {
    const options = {
      abortEarly: false,
      stripUnknown: true,
    };

    return rules.validateSync(data, options);
  };
};

module.exports = userValidator;

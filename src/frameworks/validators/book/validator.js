const createBookValidator = (bookRules) => {
  const save = (data) => {
    return bookRules.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });
  };

  return {
    save,
  };
};

module.exports = createBookValidator;

const bookValidator = (bookRules) => {
  return (data) => {
    return bookRules.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });
  };
};

module.exports = bookValidator;

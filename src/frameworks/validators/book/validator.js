const bookValidator = (bookRules) => {
  return (data) => {
    const options = {
      abortEarly: false,
      stripUnknown: true,
    };

    return bookRules.validateSync(data, options);
  };
};

module.exports = bookValidator;

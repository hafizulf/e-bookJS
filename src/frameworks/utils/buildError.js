const buildError = (error) => {
  let errorMessage = {};

  error.map((value) => {
    errorMessage[value.path] = value.errors;
  });

  return errorMessage;
};

module.exports = buildError;

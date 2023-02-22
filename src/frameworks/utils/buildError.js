const buildError = (error) => {
  let errorMessage = {};

  error.map((value) => {
    errorMessage[value.path] = value.errors[0];
  });

  return errorMessage;
};

module.exports = buildError;

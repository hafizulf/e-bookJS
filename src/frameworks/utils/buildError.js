const buildError = (error) => {
  let errorMessage = {};

  for (let i = 0; i < error.length; i++) {
    const path = error[i].path;
    const errors = error[i].errors;

    errorMessage[path] = errors;
  }

  return errorMessage;
};

module.exports = buildError;

const withEmptyData = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'Book Not Found',
  };
};

module.exports = {
  withEmptyData,
};

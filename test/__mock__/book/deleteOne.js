const withEmptyData = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'Book Not Found',
  };
};

const withExistData = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'Book has been deleted',
  };
};

module.exports = {
  withEmptyData,
  withExistData,
};

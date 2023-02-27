const response = {
  status: 'BAD_REQUEST',
  code: 400,
};

const loginWithEmptyData = () => {
  response.errors = {
    username: 'required',
    password: 'required',
  };

  return response;
};

const loginWithUsernameNotFound = () => {
  delete response.errors;
  response.message = 'User Not Found';

  return response;
};

const loginWithInvalidPassword = () => {
  return {
    status: 'Unauthorized',
    code: 401,
    message: 'Invalid Password',
  };
};

module.exports = {
  loginWithEmptyData,
  loginWithUsernameNotFound,
  loginWithInvalidPassword,
};

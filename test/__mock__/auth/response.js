const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const loginWithEmptyData = () => {
  return {
    ...resBadRequest,
    errors: {
      email: 'required',
      password: 'required',
    },
  };
};

const loginWithUserNotFound = () => {
  return {
    ...resBadRequest,
    message: 'User Not Found',
  };
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
  loginWithUserNotFound,
  loginWithInvalidPassword,
};

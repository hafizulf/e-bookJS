const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const postWithInvalidBody = () => {
  resBadRequest.errors = {
    username: ['required'],
    email: ['must be a valid email'],
    password: [
      'at least one uppercase, one lowercase, one number and one special character',
    ],
  };

  return resBadRequest;
};

const postWithValidBody = () => {
  return {
    status: 'CREATED',
    code: 201,
    message: 'User has been created',
  };
};

module.exports = {
  postWithInvalidBody,
  postWithValidBody,
};

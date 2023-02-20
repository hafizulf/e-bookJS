const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const postWithInvalidBody = () => {
  resBadRequest.errors = {
    username: ['required'],
    email: ['must be a valid email'],
    password: ['required'],
  };

  return resBadRequest;
};

module.exports = {
  postWithInvalidBody,
};

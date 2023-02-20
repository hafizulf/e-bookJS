const mockData = require('./data');

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

const findAndReturnEmptyData = () => {
  return {
    status: 'OK',
    code: 200,
    data: [],
  };
};

const findAndReturnListData = () => {
  return {
    status: 'OK',
    code: 200,
    data: mockData,
    pagination: {
      totalData: 1,
      totalPage: 1,
      perPage: 10,
      showingFrom: 1,
      showingTo: 10,
      currentPage: 1,
    },
  };
};

module.exports = {
  postWithInvalidBody,
  postWithValidBody,
  findAndReturnEmptyData,
  findAndReturnListData,
};

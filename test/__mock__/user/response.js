const mockData = require('./data');

const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const postWithInvalidBody = () => {
  resBadRequest.errors = {
    username: 'required',
    email: 'must be a valid email',
    password:
      'at least one uppercase, one lowercase, one number and one special character',
  };

  return resBadRequest;
};

const postWithInvalidEmail = () => {
  resBadRequest.errors = {
    email: 'Email is registered, please use another email',
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

const findAndReturnDataNotFound = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'User Not Found',
  };
};

const findAndReturnDetailData = () => {
  return {
    status: 'OK',
    code: 200,
    data: mockData[0],
  };
};

const putOrDeleteReturnEmptyData = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'User Not Found',
  };
};

const deleteWithExistData = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'User has been deleted',
  };
};

const putWithEmptyBody = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'Need a field to update',
  };
};

const putWithInvalidEmail = () => {
  resBadRequest.errors = {
    email: 'Email already exist',
  };

  return resBadRequest;
};

const putWithValidBody = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'User has been updated',
  };
};

module.exports = {
  postWithInvalidBody,
  postWithValidBody,
  findAndReturnListData,
  findAndReturnDataNotFound,
  findAndReturnDetailData,
  putOrDeleteReturnEmptyData,
  deleteWithExistData,
  putWithEmptyBody,
  putWithValidBody,
  postWithInvalidEmail,
  putWithInvalidEmail,
};

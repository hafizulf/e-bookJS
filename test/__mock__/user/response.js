const mockData = require('./data');

const resOK = {
  status: 'OK',
  code: 200,
};

const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const pagination = {
  totalData: 1,
  totalPage: 1,
  perPage: 10,
  showingFrom: 1,
  showingTo: 10,
  currentPage: 1,
};

const postWithInvalidBody = () => {
  return {
    ...resBadRequest,
    errors: {
      username: 'required',
      email: 'must be a valid email',
      password:
        'at least one uppercase, one lowercase, one number and one special character',
    },
  };
};

const postWithInvalidEmail = () => {
  return {
    ...resBadRequest,
    errors: {
      email: 'Email is registered, please use another email',
    },
  };
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
    ...resOK,
    data: mockData,
    pagination,
  };
};

const findAndReturnDataNotFound = () => {
  return {
    ...resOK,
    message: 'User Not Found',
  };
};

const findAndReturnDetailData = () => {
  return {
    ...resOK,
    data: mockData[0],
  };
};

const putOrDeleteReturnEmptyData = () => {
  return {
    ...resBadRequest,
    message: 'User Not Found',
  };
};

const deleteWithExistData = () => {
  return {
    ...resOK,
    message: 'User has been deleted',
  };
};

const putWithEmptyBody = () => {
  return {
    ...resBadRequest,
    message: 'Need a field to update',
  };
};

const putWithInvalidEmail = () => {
  return {
    ...resBadRequest,
    errors: {
      email: 'Email already exist',
    },
  };
};

const putWithValidBody = () => {
  return {
    ...resOK,
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

const mockData = require('./data');

// POST
const postWithInvalidBody = () => {
  return {
    title: ['required'],
    author: ['required'],
    file: ['required'],
  };
};

const postWithValidBody = () => {
  return {
    status: 'CREATED',
    code: 201,
    message: 'Book has been created',
  };
};

// GET
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
  };
};

const findAndReturnDataNotFound = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'Book Not Found',
  };
};

const findAndReturnDetailData = () => {
  return {
    status: 'OK',
    code: 200,
    data: mockData[0],
  };
};

// DELETE & PUT
const putOrDeleteReturnEmptyData = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'Book Not Found',
  };
};

// DELETE
const deleteWithExistData = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'Book has been deleted',
  };
};

// PUT
const putWithInvalidBody = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    errors: {
      title: [
        'title must be a `string` type, but the final value was: `12345`.',
      ],
    },
  };
};

const putWithValidBody = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'Book has been updated',
  };
};

module.exports = {
  postWithInvalidBody,
  postWithValidBody,
  findAndReturnEmptyData,
  findAndReturnListData,
  findAndReturnDataNotFound,
  findAndReturnDetailData,
  putOrDeleteReturnEmptyData,
  deleteWithExistData,
  putWithInvalidBody,
  putWithValidBody,
};

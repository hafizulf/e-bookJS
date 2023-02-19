const mockData = require('./data');

// POST
const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const postWithInvalidBody = () => {
  resBadRequest.errors = {
    title: ['required'],
    author: ['required'],
    file: ['required'],
  };

  return resBadRequest;
};

const resBodyInvalidFileType = () => {
  resBadRequest.errors = {
    file: ['Must be PDF filetype'],
  };

  return resBadRequest;
};

const resBodyInvalidFileSize = () => {
  resBadRequest.errors = {
    file: ['File is too large, max 100kb'],
  };
  return resBadRequest;
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
const putWithEmptyBody = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'Need a field to update',
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
  resBodyInvalidFileType,
  resBodyInvalidFileSize,
  postWithValidBody,
  findAndReturnEmptyData,
  findAndReturnListData,
  findAndReturnDataNotFound,
  findAndReturnDetailData,
  putOrDeleteReturnEmptyData,
  deleteWithExistData,
  putWithEmptyBody,
  putWithValidBody,
};
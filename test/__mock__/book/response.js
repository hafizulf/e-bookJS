const mockData = require('./data');

const resBadRequest = {
  status: 'BAD_REQUEST',
  code: 400,
};

const resOK = {
  status: 'OK',
  code: 200,
};

// POST
const postWithInvalidBody = () => {
  return {
    ...resBadRequest,
    errors: {
      title: 'required',
      author: 'required',
      file: 'required',
    },
  };
};

const putWithInvalidTitle = () => {
  return {
    ...resBadRequest,
    errors: {
      title: 'Title already exist',
    },
  };
};

const resBodyInvalidFileType = () => {
  return {
    ...resBadRequest,
    errors: {
      file: 'Must be PDF filetype',
    },
  };
};

const resBodyInvalidFileSize = () => {
  return {
    ...resBadRequest,
    errors: {
      file: 'File is too large, max 100kb',
    },
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
    ...resOK,
    data: [],
  };
};

const findAndReturnListData = () => {
  return {
    ...resOK,
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
    ...resOK,
    message: 'Book Not Found',
  };
};

const findAndReturnDetailData = () => {
  return {
    ...resOK,
    data: mockData[0],
  };
};

// DELETE & PUT
const putOrDeleteReturnEmptyData = () => {
  return {
    ...resBadRequest,
    message: 'Book Not Found',
  };
};

// DELETE
const deleteWithExistData = () => {
  return {
    ...resOK,
    message: 'Book has been deleted',
  };
};

// PUT
const putWithEmptyBody = () => {
  return {
    ...resBadRequest,
    message: 'Need a field to update',
  };
};

const putWithValidBody = () => {
  return {
    ...resOK,
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
  putWithInvalidTitle,
};

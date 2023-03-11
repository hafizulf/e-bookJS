const successFindAllPagination = (res, data, pagination) => {
  const response = {
    status: 'OK',
    code: 200,
    data,
  };

  if (pagination) {
    response.pagination = pagination;
  }

  return res.status(200).json(response);
};

const successFindAll = (res, data) => {
  return res.status(200).json({
    status: 'OK',
    code: 200,
    data,
  });
};

const successFindOne = (res, type, value) => {
  const response = {
    status: 'OK',
    code: 200,
  };
  type === 'data' ? (response.data = value) : (response.message = value);

  return res.status(200).json(response);
};

const success = (res, message) => {
  return res.status(200).json({
    status: 'OK',
    code: 200,
    message,
  });
};

const created = (res, message) => {
  return res.status(201).json({
    status: 'CREATED',
    code: 201,
    message,
  });
};

const postFailed = (res, errors) => {
  return res.status(400).json({
    status: 'BAD_REQUEST',
    code: 400,
    errors,
  });
};

const deleteFailed = (res, message) => {
  return res.status(400).json({
    status: 'BAD_REQUEST',
    code: 400,
    message,
  });
};

const updateFailed = (res, type, value) => {
  const response = {
    status: 'BAD_REQUEST',
    code: 400,
  };
  type === 'message' ? (response.message = value) : (response.errors = value);

  return res.status(400).json(response);
};

module.exports = {
  successFindAllPagination,
  successFindAll,
  successFindOne,
  success,
  created,
  postFailed,
  deleteFailed,
  updateFailed,
};

const postInvalidBody = () => {
  return {
    title: ['required'],
    author: ['required'],
    file: ['required'],
  };
};

const postValidBody = () => {
  return {
    status: 'CREATED',
    code: 201,
    message: 'Book has been created',
  };
};

module.exports = {
  postInvalidBody,
  postValidBody,
};

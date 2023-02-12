const mockData = require('./data');

const getEmptyData = () => {
  return {
    status: 'OK',
    code: 200,
    data: [],
  };
};

const getListData = () => {
  return {
    status: 'OK',
    code: 200,
    data: mockData,
  };
};

module.exports = {
  getEmptyData,
  getListData,
};

const mockData = require('./data');

const getEmptyData = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'Book Not Found',
  };
};

const getDetailData = () => {
  return {
    status: 'OK',
    code: 200,
    data: {
      book_id: mockData[0].book_id,
      title: 'Naruto Shippuden',
      slug: 'naruto-shippuden',
      author: 'Masashi KishiMoto',
      city: null,
      publisher: null,
      year: null,
      type: null,
      desc: null,
      file: 'example.pdf',
    },
  };
};

module.exports = {
  getEmptyData,
  getDetailData,
};

const { v4: uuidv4 } = require('uuid');

const book_id = uuidv4();
const mockData = [
  {
    book_id,
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
];

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
      book_id,
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
  mockData,
  getEmptyData,
  getDetailData,
};

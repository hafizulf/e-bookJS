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

const withEmptyData = () => {
  return {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'Book Not Found',
  };
};

const withExistData = () => {
  return {
    status: 'OK',
    code: 200,
    message: 'Book has been deleted',
  };
};

module.exports = {
  book_id,
  mockData,
  withEmptyData,
  withExistData,
};

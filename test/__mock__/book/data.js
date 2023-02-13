const { v4: uuidv4 } = require('uuid');

const book_id = uuidv4();
const data = [
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

module.exports = data;

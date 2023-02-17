const sinon = require('sinon');
const { v4: uuidv4 } = require('uuid');

const book_id = uuidv4();
const data = [
  {
    book_id,
    title: 'Naruto Shippuden',
    slug: 'naruto-shippuden',
    author: 'Masashi KishiMoto',
    city: 'Jakarta',
    publisher: 'Skuy Ngoding Inc',
    year: '2023',
    type: 'Science',
    desc: 'This is a book about the Universe',
    file: 'sample.pdf',
  },
];

module.exports = data;

const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

let date = faker.date.between('2000', '2023');
const createFakeBooks = () => ({
  book_id: uuidv4(),
  title: faker.lorem.word({ length: { min: 8, max: 25 } }),
  author: faker.name.firstName(),
  city: faker.address.cityName(),
  publisher: faker.company.name(),
  year: date.getFullYear(),
  type: faker.word.noun(),
  file: 'example.pdf',
  desc: null,
});

exports.seed = async function (knex) {
  await knex('books').del();

  const fakeBooks = [];
  for (let i = 0; i < 10; i++) {
    fakeBooks.push(createFakeBooks());
  }

  await knex('books').insert(fakeBooks);
};

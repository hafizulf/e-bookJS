const { v4: uuidv4 } = require('uuid');

const user_id = uuidv4();

const data = [
  {
    user_id,
    name: 'skuy ngoding',
    username: 'skuy',
    email: 'example@co',
    password: '@Pass123',
    is_active: 1,
  },
];

module.exports = data;

const bookService = require('../use-cases/book');

const findAll = (req, res) => {
  bookService.findAll().then(result => {
    return res.json({
      data: result
    });
  });
};

module.exports = {
  findAll
};

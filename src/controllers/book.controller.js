const bookService = require('../use-cases/book');

const findAll = (req, res) => {
  bookService.findAll().then((result) => {
    return res.status(200).json({
      status: 'OK',
      code: 200,
      data: result,
    });
  });
};

module.exports = {
  findAll,
};

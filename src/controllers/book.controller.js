const bookService = require('../use-cases/book');

const findAll = async (req, res) => {
  const result = await bookService.findAll();

  return res.status(200).json({
    status: 'OK',
    code: 200,
    data: result,
  });
};

module.exports = {
  findAll,
};

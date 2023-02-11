const bookService = require('../use-cases/book');

const findAll = async (req, res) => {
  const result = await bookService.findAll();

  return res.status(200).json({
    status: 'OK',
    code: 200,
    data: result,
  });
};

const save = async (req, res) => {
  const data = req.body;
  const response = await bookService.save(data);

  // check if status is true
  if (response.status) {
    return res.status(201).json({
      status: 'CREATED',
      code: 201,
      data,
    });
  } else {
    return res.status(400).json({
      status: 'BAD_REQUEST',
      code: 400,
      errors: response.errors,
    });
  }
};

module.exports = {
  findAll,
  save,
};

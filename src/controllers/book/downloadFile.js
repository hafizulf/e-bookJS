const ctlDownloadFile = (path) => {
  return async (req, res) => {
    const { filename } = req.params;
    const fileLocation = path.join('./uploads/books/');
    const file = fileLocation + filename;

    res.download(file, (err) => {
      if (err) {
        return res.status(500).json({
          status: 'Internal Server Error',
          code: 500,
          errors: err.message,
        });
      } else {
        console.log(`download ${filename}`);
      }
    });
  };
};

module.exports = ctlDownloadFile;

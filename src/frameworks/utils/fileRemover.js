const fs = require('fs');

const fileRemover = (filename) => {
  fs.unlink('uploads/books/' + filename, (err) => {
    if (err) throw err;
    console.log('file deleted successfully');
  });
};

module.exports = fileRemover;

const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = './uploads/books';
    callback(null, dir);
  },
  filename: (req, file, callback) => {
    const originalName = file.originalname.replace(/ /g, '');
    const fileName = originalName.substring(0, originalName.lastIndexOf('.'));
    const ext = originalName.substring(originalName.lastIndexOf('.'));
    const date = moment(new Date()).format('DDMMYYYYHHmmss');

    callback(null, `${fileName}-${date}${ext}`);
  },
});

/**
 * we can add limit, fileFilter, etc
 * but let's front-end handle it
 */

const upload = multer({ storage });

module.exports = upload;

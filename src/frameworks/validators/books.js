const bookSchema = (yup) => {
  return yup.object({
    title: yup.string().required(),
    author: yup.string().required(),
    city: yup.string().optional(),
    publisher: yup.string().optional(),
    year: yup.string().optional(),
    type: yup.string().optional(),
    desc: yup.string().optional(),
    file: yup.string().required(),
  });
};

module.exports = bookSchema;

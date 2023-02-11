const bookSchema = (yup) => {
  return yup.object({
    title: yup.string().required('required'),
    author: yup.string().required('required'),
    city: yup.string().optional(),
    publisher: yup.string().optional(),
    year: yup.string().optional(),
    type: yup.string().optional(),
    desc: yup.string().optional(),
    file: yup.string().required('required'),
  });
};

module.exports = bookSchema;

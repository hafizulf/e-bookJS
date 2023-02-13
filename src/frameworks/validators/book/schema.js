const bookSchema = (yup) => {
  return yup.object({
    title: yup.string().required('required'),
    author: yup.string().required('required'),
    city: yup.string().optional().nullable(),
    publisher: yup.string().optional().nullable(),
    year: yup.string().optional().nullable(),
    type: yup.string().optional().nullable(),
    desc: yup.string().optional().nullable(),
    file: yup.string().required('required'),
  });
};

module.exports = bookSchema;

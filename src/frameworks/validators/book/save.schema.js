const saveSchema = (yup) => {
  return yup.object({
    title: yup.string().strict().required('required'),
    author: yup.string().strict().required('required'),
    file: yup.string().strict().required('required'),
    city: yup.string().strict().notRequired(),
    publisher: yup.string().notRequired(),
    year: yup.string().strict().notRequired(),
    type: yup.string().strict().notRequired(),
    desc: yup.string().strict().notRequired(),
  });
};

module.exports = saveSchema;

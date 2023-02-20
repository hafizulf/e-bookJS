const saveSchema = (yup) => {
  return yup.object({
    name: yup.string().strict().notRequired(),
    username: yup.string().strict().required('required'),
    email: yup
      .string()
      .strict()
      .email('must be a valid email')
      .required('required'),
    password: yup.string().strict().required('required'),
  });
};

module.exports = saveSchema;

const loginSchema = (yup) => {
  return yup.object({
    email: yup.string().strict().required('required'),
    password: yup.string().strict().required('required'),
  });
};

module.exports = loginSchema;

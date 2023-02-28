const loginSchema = (yup) => {
  return yup.object().shape({
    username: yup.string().when('email', {
      is: (email) => !email,
      then: () => yup.string().strict().required('required'),
      otherwise: () => yup.string().strict().notRequired(),
    }),
    email: yup.string().strict(),
    password: yup.string().strict().required('required'),
  });
};

module.exports = loginSchema;

const saveSchema = (yup) => {
  return yup.object({
    name: yup.string().strict().notRequired(),
    username: yup.string().strict().required('required'),
    email: yup
      .string()
      .strict()
      .email('must be a valid email')
      .required('required'),
    password: yup
      .string()
      .strict()
      .required('required')
      .min(8, 'must be at least 8 characters')
      .matches(
        '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[#?!@$%^&*-])',
        'at least one uppercase, one lowercase, one number and one special character'
      ),
  });
};

module.exports = saveSchema;

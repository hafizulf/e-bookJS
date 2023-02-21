const saveSchema = (yup) => {
  return yup.object({
    oldPassword: yup.string().strict().required('required'),
    password: yup
      .string()
      .strict()
      .required('required')
      .min(8, 'must be at least 8 characters')
      .matches(
        '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?[#?!@$%^&*-])',
        'at least one uppercase, one lowercase, one number and one special character'
      ),
    passwordConfirmation: yup
      .string()
      .test('passwords-match', 'Password must match', function (value) {
        return this.parent.password === value;
      }),
  });
};

module.exports = saveSchema;

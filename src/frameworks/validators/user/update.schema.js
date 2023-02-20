const saveSchema = (yup) => {
  return yup.object({
    name: yup.string().strict().notRequired(),
    username: yup.string().strict().optional(),
    email: yup.string().strict().email('must be a valid email').optional(),
  });
};

module.exports = saveSchema;

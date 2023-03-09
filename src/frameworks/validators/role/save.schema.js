const saveSchema = (yup) => {
  return yup.object({
    role: yup.string().strict().required('required'),
    desc: yup.string().strict().notRequired(),
  });
};

module.exports = saveSchema;

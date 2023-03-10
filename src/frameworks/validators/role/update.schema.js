const saveSchema = (yup) => {
  return yup.object({
    role: yup.string().strict().notRequired(),
    desc: yup.string().strict().notRequired(),
  });
};

module.exports = saveSchema;

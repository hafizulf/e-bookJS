const updateSchema = (yup) => {
  return yup.object({
    title: yup.string().strict().optional(),
    author: yup.string().strict().optional(),
    file: yup.string().strict().optional(),
    city: yup.string().strict().notRequired(),
    publisher: yup.string().strict().notRequired(),
    year: yup.string().strict().notRequired(),
    type: yup.string().strict().notRequired(),
    desc: yup.string().strict().notRequired(),
  });
};

module.exports = updateSchema;

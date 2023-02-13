const updateSchema = (yup) => {
  return yup.object({
    title: yup.string().strict().optional(),
    author: yup.string().strict().optional(),
    city: yup.string().strict().notRequired(),
    publisher: yup.string().notRequired(),
    year: yup.string().notRequired(),
    type: yup.string().notRequired(),
    desc: yup.string().notRequired(),
    file: yup.string().strict().optional(),
  });
};

module.exports = updateSchema;

const updateSchema = (yup) => {
  return yup.object({
    title: yup.string().strict().optional(),
    author: yup.string().strict().optional(),
    file: yup
      .mixed()
      .optional()
      .test((value, ctx) => {
        if (value && value.mimetype !== 'application/pdf') {
          return ctx.createError({ message: 'Must be PDF filetype' });
        }
        if (value && value.size > 100000) {
          return ctx.createError({
            message: 'File is too large, max 100kb',
          });
        }

        return true;
      }),
    city: yup.string().strict().notRequired(),
    publisher: yup.string().strict().notRequired(),
    year: yup.string().strict().notRequired(),
    type: yup.string().strict().notRequired(),
    desc: yup.string().strict().notRequired(),
  });
};

module.exports = updateSchema;

const saveSchema = (yup) => {
  return yup.object({
    title: yup.string().strict().required('required'),
    author: yup.string().strict().required('required'),
    file: yup.mixed().test((value, ctx) => {
      if (!value) {
        return ctx.createError({ message: 'required' });
      }
      if (value.mimetype !== 'application/pdf') {
        return ctx.createError({ message: 'Must be PDF filetype' });
      }

      if (value.size > 100000) {
        return ctx.createError({
          message: 'File is too large, max 100kb',
        });
      }

      return true;
    }),
    city: yup.string().strict().notRequired(),
    publisher: yup.string().notRequired(),
    year: yup.string().strict().notRequired(),
    type: yup.string().strict().notRequired(),
    desc: yup.string().strict().notRequired(),
  });
};

module.exports = saveSchema;

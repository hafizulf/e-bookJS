const saveSchema = (yup) => {
  return yup.object({
    user_id: yup.string().strict().required('required'),
    role_id: yup.string().strict().required('required'),
  });
};

module.exports = saveSchema;

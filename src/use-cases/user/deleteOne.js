const serviceDeleteOne = (repository) => {
  return async (user_id) => {
    await repository.deleteOne(user_id);
  };
};
module.exports = serviceDeleteOne;

const serviceDeleteOne = (repository) => {
  return async (user_id) => {
    const user = await repository.findOne({ name: 'user_id', value: user_id });

    if (!user) {
      return {
        status: false,
        message: 'User Not Found',
      };
    } else {
      await repository.deleteOne(user_id);
      return {
        status: true,
        message: 'User has been deleted',
      };
    }
  };
};
module.exports = serviceDeleteOne;

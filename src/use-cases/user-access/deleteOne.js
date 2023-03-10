const serviceDeleteOne = (repository) => {
  return async (user_access_id) => {
    const userAccess = await repository.findOne(user_access_id);

    if (!userAccess) {
      return {
        status: false,
        message: 'User Access Not Found',
      };
    } else {
      await repository.deleteOne(user_access_id);

      return {
        status: true,
        message: 'Access has been removed',
      };
    }
  };
};
module.exports = serviceDeleteOne;

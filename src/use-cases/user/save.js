const saveService = (repository) => {
  return (user) => {
    try {
      if (!user.username) {
        throw new Error('Username is required');
      }
    } catch (e) {
      console.log(e);
    }
  };
};

module.exports = saveService;

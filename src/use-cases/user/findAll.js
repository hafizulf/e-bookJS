const serviceFindAll = (repository, paginate) => {
  return async (filter) => {
    const { totalRow } = await repository.countAll();
    const { currentPage, limit, search } = filter;
    const pagination = paginate(totalRow, currentPage, limit);

    const result = await repository.findAll({
      limit,
      search,
      offset: pagination.showingFrom - 1,
    });

    const response = {
      data: result,
    };

    if (result.length !== 0) {
      response.pagination = pagination;
    }

    return response;
  };
};

module.exports = serviceFindAll;

const paginate = (totalRow, currentPage, limit) => {
  const start = (currentPage - 1) * limit;
  const end = currentPage * limit;

  let pagination = {
    totalData: totalRow,
    totalPage: Math.ceil(totalRow / limit),
    perPage: limit,
    showingFrom: start + 1,
    showingTo: end,
    currentPage,
  };

  if (end < totalRow) {
    pagination.nextPage = currentPage + 1;
  }

  if (start > 0) {
    pagination.prevPage = currentPage - 1;
  }

  return pagination;
};

module.exports = paginate;

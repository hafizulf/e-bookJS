const deleteSpecs = (
  expect,
  request,
  app,
  database,
  mockData,
  mockResponse,
  getUserToken
) => {
  describe('DELETE /api/v1/books', () => {
    const url = '/api/v1/books';
    const table = 'books';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given data not found', () => {
      it('should return message with book not found', (done) => {
        request(app)
          .delete(`${url}/failed-id`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(
              mockResponse.putOrDeleteReturnEmptyData()
            );
            return done();
          });
      });
    });

    describe('given exist data', () => {
      before(async () => {
        await database.insert(mockData).into(table);
      });

      it('should deleted successfully', (done) => {
        request(app)
          .delete(`${url}/${mockData[0].book_id}`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(mockResponse.deleteWithExistData());
            return done();
          });
      });

      it('should return empty table', async () => {
        const result = await database.select('book_id').table(table);
        expect(result).to.deep.equal([]);
      });
    });
  });
};

module.exports = deleteSpecs;

const findAllSpecs = (
  expect,
  request,
  app,
  database,
  cache,
  mockData,
  mockResponse
) => {
  describe('GET /api/v1/users', () => {
    const url = '/api/v1/users';
    const table = 'users';

    describe('given empty data', () => {
      it('should return empty array, etc', (done) => {
        request(app)
          .get(url)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(
              mockResponse.findAndReturnEmptyData()
            );
            return done();
          });
      });
    });

    describe('given list of data', () => {
      before(async () => {
        cache.del(url);
        await database.insert(mockData).into(table);
      });

      it('should return list of users', (done) => {
        request(app)
          .get(url)
          .end((err, res) => {
            delete res.body.data[0].created_at; // ignore for now
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(
              mockResponse.findAndReturnListData()
            );
            return done();
          });
      });

      after(async () => {
        await database(table).del();
      });
    });
  });
};

module.exports = findAllSpecs;

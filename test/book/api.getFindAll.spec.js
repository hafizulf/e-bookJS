const findAllSpecs = ({
  request,
  expect,
  app,
  database,
  cache,
  mockData,
  mockResponse,
  getUserToken,
}) => {
  describe('GET /api/v1/books', () => {
    const url = '/api/v1/books';
    const table = 'books';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given empty data', () => {
      it('should return empty array, etc', (done) => {
        request(app)
          .get(url)
          .set({ 'x-auth-token': token })
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
        cache.del(url); // destroy cache
        await database.insert(mockData).into(table);
      });

      it('should return list of books', (done) => {
        request(app)
          .get(url)
          // .set({ 'x-auth-token': token })
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
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

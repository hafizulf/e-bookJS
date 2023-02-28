const findAllSpecs = (
  expect,
  request,
  app,
  database,
  cache,
  mockData,
  mockResponse,
  getUserToken
) => {
  describe('GET /api/v1/users', () => {
    const url = '/api/v1/users';
    const table = 'users';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given list of data', () => {
      it('should return list of users', (done) => {
        request(app)
          .get(url)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('array');
            expect(res.body.pagination).to.deep.equal({
              totalData: 1,
              totalPage: 1,
              perPage: 10,
              showingFrom: 1,
              showingTo: 10,
              currentPage: 1,
            });
            return done();
          });
      });

      after(async () => {
        cache.del(url);
      });
    });
  });
};

module.exports = findAllSpecs;

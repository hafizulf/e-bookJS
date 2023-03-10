const findAllSpecs = ({ request, expect, app, cache, getUserToken }) => {
  describe('GET /api/v1/users', () => {
    const url = '/api/v1/users';
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
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('array');
            expect(res.body.pagination).to.include.all.keys(
              'totalData',
              'totalPage',
              'perPage',
              'showingFrom',
              'showingTo',
              'currentPage'
            );
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

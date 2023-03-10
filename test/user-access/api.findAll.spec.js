const saveSpecs = ({ request, expect, app, database, getUserToken }) => {
  describe('GET /api/v1/user-access', function () {
    const url = '/api/v1/user-access';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given list of data', function () {
      it('should return list of user access', (done) => {
        request(app)
          .get(url)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
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
    });
  });
};

module.exports = saveSpecs;

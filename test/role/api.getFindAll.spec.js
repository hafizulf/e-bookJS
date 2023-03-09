const findAllSpecs = ({ request, expect, app, getUserToken }) => {
  describe('GET /api/v1/roles', function () {
    const url = '/api/v1/roles';
    const table = 'roles';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given list of data', function () {
      it('should return list of roles', (done) => {
        request(app)
          .get(url)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('array');
            return done();
          });
      });
    });
  });
};

module.exports = findAllSpecs;

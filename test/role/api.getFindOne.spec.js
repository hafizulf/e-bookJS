const findOneSpecs = ({ request, expect, app, getUserToken }) => {
  describe('GET /api/v1/roles/:role_id', () => {
    const url = '/api/v1/roles';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given empty data', () => {
      it('should return message with role not found', (done) => {
        request(app)
          .get(`${url}/example_role_id`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal('Role Not Found');
            return done();
          });
      });
    });
  });
};

module.exports = findOneSpecs;

const findOneSpecs = ({
  request,
  expect,
  app,
  database,
  mockResponse,
  getUserToken,
}) => {
  describe('GET /api/v1/users/:user_id', () => {
    const url = '/api/v1/users';
    const table = 'users';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given empty data', () => {
      it('should return message with user not found', (done) => {
        request(app)
          .get(`${url}/example_user_id`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(
              mockResponse.findAndReturnDataNotFound()
            );
            return done();
          });
      });
    });

    describe('given a data', () => {
      let user_id;
      before(async () => {
        const result = await database.select('user_id').table(table);
        user_id = result[0].user_id;
      });

      it('should return a detail of book', (done) => {
        request(app)
          .get(`${url}/${user_id}`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body.status).to.equal('OK');
            expect(res.body.data).to.be.an('object');
            return done();
          });
      });
    });
  });
};

module.exports = findOneSpecs;

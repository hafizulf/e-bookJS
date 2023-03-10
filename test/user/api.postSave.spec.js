const saveSpecs = ({
  request,
  expect,
  app,
  database,
  compare,
  getUserToken,
  mockResponse,
}) => {
  describe('POST /api/v1/users', function () {
    const url = '/api/v1/users';
    const table = 'users';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('when user given invalid data', function () {
      it('should return 400 with errors message', function (done) {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({ email: 'example.email', password: '@pass' })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(mockResponse.postWithInvalidBody());
            return done();
          });
      });
    });

    describe('when user given valid data', function () {
      it('should return 201 with successfully created', function (done) {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({
            username: 'newuser',
            email: 'newuser@ex.co',
            password: '@Password123',
          })
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.deep.equal(mockResponse.postWithValidBody());
            return done();
          });
      });

      let user_id;
      it('should return inserted data', async function () {
        const user = await database
          .select('user_id', 'username', 'email', 'password')
          .table(table)
          .where('username', 'newuser')
          .first();

        user_id = user.user_id;

        expect(user.username).to.equal('newuser');
        expect(user.email).to.equal('newuser@ex.co');

        const isMatch = compare('@Password123', user.password);
        expect(isMatch).to.equal(true);
      });

      it('given email registered should return errors', function (done) {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({
            username: 'newuser',
            email: 'newuser@ex.co',
            password: '@Password123',
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(mockResponse.postWithInvalidEmail());
            return done();
          });
      });

      after(async function () {
        await database.del().table(table).where('user_id', user_id).del();
      });
    });
  });
};

module.exports = saveSpecs;

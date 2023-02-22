const saveSpecs = (
  expect,
  request,
  app,
  database,
  compare,
  mockData,
  mockResponse
) => {
  describe('POST /api/v1/users', function () {
    const url = '/api/v1/users';
    const table = 'users';

    describe('when user given invalid data', function () {
      it('should return 400 with errors message', function (done) {
        request(app)
          .post(url)
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
          .send(mockData[0])
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.deep.equal(mockResponse.postWithValidBody());
            return done();
          });
      });

      it('should return inserted data', async function () {
        let mocked = mockData[0];

        const user = await database
          .select('username', 'email', 'password')
          .table(table)
          .where('username', mocked.username)
          .first();

        expect(user.username).to.equal(mocked.username);
        expect(user.email).to.equal(mocked.email);

        const isMatch = compare(mocked.password, user.password);
        expect(isMatch).to.equal(true);
      });

      after(async function () {
        await database(table).del();
      });
    });
  });
};

module.exports = saveSpecs;

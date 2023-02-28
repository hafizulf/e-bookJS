const updateSpecs = (
  expect,
  request,
  app,
  database,
  mockData,
  mockResponse,
  getUserToken
) => {
  describe('UPDATE /api/v1/users/:user_id', function () {
    const url = '/api/v1/users';
    const table = 'users';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('when empty data', function () {
      it('should return user not found', function (done) {
        request(app)
          .put(`${url}/example_user_id`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(
              mockResponse.putOrDeleteReturnEmptyData()
            );
            return done();
          });
      });
    });

    describe('when exist data', function () {
      let user_id;

      before(async () => {
        await request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send(mockData[0]);
        const result = await database.select().table(table);
        user_id = result[1].user_id;
      });

      describe('when invalid body', function () {
        it('given empty body should return -> need a field to update', function (done) {
          request(app)
            .put(`${url}/${user_id}`)
            .set({ 'x-auth-token': token })
            .send({})
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body).to.deep.equal(mockResponse.putWithEmptyBody());
              return done();
            });
        });

        it('given invalid username should return -> username must be a string', function (done) {
          request(app)
            .put(`${url}/${user_id}`)
            .set({ 'x-auth-token': token })
            .send({
              username: 12345,
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.errors).to.deep.equal({
                username:
                  'username must be a `string` type, but the final value was: `12345`.',
              });
              return done();
            });
        });
      });

      describe('given valid body', function () {
        it('should return successfully updated user', function (done) {
          request(app)
            .put(`${url}/${user_id}`)
            .set({ 'x-auth-token': token })
            .send({
              name: 'skuy ngoding updated',
              username: 'skuy update',
              email: 'skuy.update@co',
            })
            .end((err, res) => {
              expect(res.status).to.equal(200);
              expect(res.body).to.deep.equal(mockResponse.putWithValidBody());
              return done();
            });
        });

        it('should return updated user', async function () {
          const result = await request(app)
            .get(`${url}/${user_id}`)
            .set({ 'x-auth-token': token });
          const { name, username, email } = result.body.data;

          expect(name).to.equal('skuy ngoding updated');
          expect(username).to.equal('skuy update');
          expect(email).to.equal('skuy.update@co');
        });
      });

      after(async function () {
        await database.del().table(table).where('user_id', user_id).del();
      });
    });
  });
};

module.exports = updateSpecs;

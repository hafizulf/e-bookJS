const updateSpecs = ({
  request,
  expect,
  app,
  database,
  hash,
  mockData,
  mockResponse,
  getUserToken,
}) => {
  describe('PUT /api/v1/users/:user_id', function () {
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
          .set('Authorization', `Bearer ${token}`)
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
        await database
          .insert({
            username: 'userex12',
            email: 'userex12@co',
            password: hash('@Userex123'),
          })
          .into(table);

        // refer to added user in getToken
        const user = await database
          .select('user_id')
          .table(table)
          .where('email', 'example@co')
          .first();
        user_id = user.user_id;
      });

      describe('when invalid body', function () {
        it('given empty body should return -> need a field to update', function (done) {
          request(app)
            .put(`${url}/${user_id}`)
            .set('Authorization', `Bearer ${token}`)
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
            .set('Authorization', `Bearer ${token}`)
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
            .set('Authorization', `Bearer ${token}`)
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
            .set('Authorization', `Bearer ${token}`);
          const { name, username, email } = result.body.data;

          expect(name).to.equal('skuy ngoding updated');
          expect(username).to.equal('skuy update');
          expect(email).to.equal('skuy.update@co');
        });

        it('given email registered should return errors', function (done) {
          request(app)
            .put(`${url}/${user_id}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
              name: 'skuy ngoding 2nd updated',
              email: 'userex12@co',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body).to.deep.equal(
                mockResponse.putWithInvalidEmail()
              );
              return done();
            });
        });
      });

      after(async function () {
        await database.del().where('username', 'userex12').table(table);
      });
    });
  });
};

module.exports = updateSpecs;

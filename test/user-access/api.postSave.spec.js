const saveSpecs = ({ request, expect, app, database, getUserToken }) => {
  describe('POST /api/v1/user-access', function () {
    const url = '/api/v1/user-access';
    const table = 'users_access';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    let role_id; // global
    describe('given invalid data', function () {
      describe('when body is empty', function () {
        it('should return 400 with errors message', (done) => {
          request(app)
            .post(url)
            .set({ 'x-auth-token': token })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.errors).to.deep.equal({
                user_id: 'required',
                role_id: 'required',
              });
              return done();
            });
        });
      });

      describe('when user/role not found', function () {
        it('should return 400 with error not found', (done) => {
          request(app)
            .post(url)
            .set({ 'x-auth-token': token })
            .send({
              user_id: 'example_not_found',
              role_id: 'example_not_found',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.errors).to.deep.equal({
                message: 'User/Role Not Found',
              });
              return done();
            });
        });
      });

      describe('when user access already exist', function () {
        let user_id;
        before(async () => {
          const user = await database
            .select('user_id')
            .where('username', 'skuy')
            .table('users')
            .first();
          const role = await database
            .select('role_id')
            .where('role', 'user')
            .table('roles')
            .first();

          user_id = user.user_id;
          role_id = role.role_id;
        });

        it('should return 400 with error user access already exist', (done) => {
          request(app)
            .post(url)
            .set({ 'x-auth-token': token })
            .send({ user_id, role_id })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.errors).to.deep.equal({
                message: 'User access has already exist',
              });
              return done();
            });
        });
      });
    });

    describe('given valid data', () => {
      let user_id;
      before(async () => {
        await database
          .insert({
            username: 'ex123',
            email: 'ex123@co',
            password: '@Ex12345',
          })
          .into('users');

        const user = await database
          .select('user_id')
          .where('username', 'ex123')
          .table('users')
          .first();

        user_id = user.user_id;
      });

      it('should successfully created new user access', (done) => {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({ user_id, role_id })
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.deep.equal({
              status: 'CREATED',
              code: 201,
              message: 'New user access has been created',
            });
            return done();
          });
      });

      after(async () => {
        await database.del().table('users').where('username', 'ex123');
      });
    });
  });
};

module.exports = saveSpecs;

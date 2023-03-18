const deleteSpecs = ({ request, expect, app, database, getUserToken }) => {
  describe('DELETE /api/v1/user-access', () => {
    const url = '/api/v1/user-access';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given data not found', () => {
      it('should return message with user access not found', (done) => {
        request(app)
          .delete(`${url}/example_user_access_id`)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            return done();
          });
      });
    });

    describe('given exist data', () => {
      const table = 'users_access';

      let user_access_id;
      before(async () => {
        await database
          .insert({
            username: 'ex123',
            email: 'ex123@co',
            password: '@Ex12345',
          })
          .into('users');
        const user = await database
          .select()
          .table('users')
          .where('username', 'ex123')
          .first();

        await database.insert({ role: 'example' }).into('roles');
        const role = await database
          .select()
          .table('roles')
          .where('role', 'example')
          .first();

        await database
          .insert({ user_id: user.user_id, role_id: role.role_id })
          .into(table);
        const userAccess = await database
          .select('user_access_id', 'u.username', 'r.role')
          .table(table)
          .join('users as u', 'u.user_id', '=', 'users_access.user_id')
          .join('roles as r', 'r.role_id', '=', 'users_access.role_id')
          .where('u.username', 'ex123')
          .first();

        user_access_id = userAccess.user_access_id;
      });

      it('should successfully removed user access', (done) => {
        request(app)
          .delete(`${url}/${user_access_id}`)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal({
              status: 'OK',
              code: 200,
              message: 'Access has been removed',
            });
            return done();
          });
      });
    });
  });
};

module.exports = deleteSpecs;

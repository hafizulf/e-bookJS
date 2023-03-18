const deleteSpecs = ({
  request,
  expect,
  app,
  database,
  getUserToken,
  uuidv4,
}) => {
  describe('DELETE /api/v1/roles', () => {
    const url = '/api/v1/roles';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given data not found', () => {
      it('should return message with role not found', (done) => {
        request(app)
          .delete(`${url}/example_role_id`)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            return done();
          });
      });
    });

    describe('given exist data', () => {
      const table = 'roles';

      let role_id;
      before(async () => {
        role_id = uuidv4();
        await database.insert({ role_id, role: 'example' }).into(table);
      });

      it('should deleted successfully', (done) => {
        request(app)
          .delete(`${url}/${role_id}`)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal({
              status: 'OK',
              code: 200,
              message: 'Role has been deleted',
            });
            return done();
          });
      });

      after(async () => {
        await database.del().table(table).where('role', 'example');
      });
    });
  });
};

module.exports = deleteSpecs;

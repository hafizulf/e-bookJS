const updateSpecs = ({
  request,
  expect,
  app,
  database,
  getUserToken,
  uuidv4,
}) => {
  describe('PUT /api/v1/roles/:role_id', function () {
    const url = '/api/v1/roles';
    const table = 'roles';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('when exist data', function () {
      let role_id;
      before(async () => {
        role_id = uuidv4();
        await database.insert({ role_id, role: 'example' }).into(table);
        await database.insert({ role: 'example-role' }).into(table);
      });

      describe('given invalid body', function () {
        it('should return errors message', (done) => {
          request(app)
            .put(`${url}/${role_id}`)
            .set({ 'x-auth-token': token })
            .send({
              desc: 12345678,
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.errors).to.deep.equal({
                desc: 'desc must be a `string` type, but the final value was: `12345678`.',
              });
              return done();
            });
        });
      });

      describe('given valid body', function () {
        it('when given role exist should return errors', (done) => {
          request(app)
            .put(`${url}/${role_id}`)
            .set({ 'x-auth-token': token })
            .send({ role: 'example-role' })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.errors).to.deep.equal({
                role: 'Role already exist',
              });
              return done();
            });
        });

        it('should return successfully updated role', (done) => {
          request(app)
            .put(`${url}/${role_id}`)
            .set({ 'x-auth-token': token })
            .send({
              role: 'example role update',
              desc: 'example role description',
            })
            .end((err, res) => {
              expect(res.status).to.equal(200);
              expect(res.body.message).to.equal('Role has been updated');
              return done();
            });
        });
      });

      after(async () => {
        await database.del().table(table).where('role', 'example role update');
      });
    });
  });
};

module.exports = updateSpecs;

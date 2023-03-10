const saveSpecs = ({ request, expect, app, getUserToken }) => {
  describe('POST /api/v1/roles', function () {
    const url = '/api/v1/roles';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given invalid body', function () {
      it('should return errors message', (done) => {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({})
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal({
              status: 'BAD_REQUEST',
              code: 400,
              errors: {
                role: 'required',
              },
            });
            return done();
          });
      });
    });

    describe('given valid body', function () {
      it('should return role created successfully', (done) => {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({
            role: 'author',
            desc: 'author role, can create book',
          })
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.deep.equal({
              status: 'CREATED',
              code: 201,
              message: 'Role has been created',
            });
            return done();
          });
      });

      it('given role exist should return errors', function (done) {
        request(app)
          .post(url)
          .set({ 'x-auth-token': token })
          .send({ role: 'author' })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.errors).to.deep.equal({
              role: 'Role already exist',
            });
            return done();
          });
      });
    });
  });
};

module.exports = saveSpecs;

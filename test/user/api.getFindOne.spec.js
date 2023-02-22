const findOneSpecs = (
  expect,
  request,
  app,
  database,
  mockData,
  mockResponse
) => {
  describe('GET /api/v1/users/:user_id', () => {
    const url = '/api/v1/users';
    const table = 'users';

    describe('given empty data', () => {
      it('should return message with user not found', (done) => {
        request(app)
          .get(`${url}/example_user_id`)
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
      before(async () => {
        await database.insert(mockData).into(table);
      });

      it('should return a detail of book', (done) => {
        request(app)
          .get(`${url}/${mockData[0].user_id}`)
          .end((err, res) => {
            delete res.body.data.created_at; // ignoring created_at field
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(
              mockResponse.findAndReturnDetailData()
            );
            return done();
          });
      });

      after(async () => {
        await database(table).del();
      });
    });
  });
};

module.exports = findOneSpecs;

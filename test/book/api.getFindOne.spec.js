const findOneSpecs = (
  expect,
  request,
  app,
  database,
  mockData,
  mockResponse
) => {
  describe('GET /api/v1/books/:slug', () => {
    const url = '/api/v1/books';
    const table = 'books';

    describe('given empty data', () => {
      it('should return message with book not found', (done) => {
        request(app)
          .get(`${url}/example-slug`)
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
          .get(`${url}/naruto-shippuden`)
          .end((err, res) => {
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

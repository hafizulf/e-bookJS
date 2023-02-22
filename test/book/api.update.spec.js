const updateSpecs = (
  expect,
  request,
  app,
  database,
  mockData,
  mockResponse
) => {
  describe('PUT /api/v1/books', function () {
    const url = '/api/v1/books';
    const table = 'books';

    describe('given empty data', function () {
      it('should return book not found', function (done) {
        request(app)
          .put(`${url}/example-book-id`)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.deep.equal(
              mockResponse.putOrDeleteReturnEmptyData()
            );
            return done();
          });
      });
    });

    describe('given exist data', function () {
      before(async function () {
        await database.insert(mockData).into(table);
      });

      describe('given invalid body', function () {
        describe('given empty body', function () {
          it('should return errors message', function (done) {
            request(app)
              .put(`${url}/${mockData[0].book_id}`)
              .send({})
              .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.deep.equal(mockResponse.putWithEmptyBody());
                return done();
              });
          });
        });
      });

      describe('given valid body', function () {
        it('should successfully updated', function (done) {
          request(app)
            .put(`${url}/${mockData[0].book_id}`)
            .field('title', mockData[0].title)
            .field('author', mockData[0].author)
            .field('city', mockData[0].city)
            .field('publisher', mockData[0].publisher)
            .field('year', mockData[0].year)
            .field('type', mockData[0].type)
            .field('desc', mockData[0].desc)
            .end((err, res) => {
              expect(res.status).to.equal(200);
              expect(res.body).to.deep.equal(mockResponse.putWithValidBody());
              return done();
            });
        });
      });

      after(async function () {
        await database(table).del();
      });
    });
  });
};

module.exports = updateSpecs;

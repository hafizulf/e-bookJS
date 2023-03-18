const updateSpecs = ({
  request,
  expect,
  app,
  database,
  mockData,
  mockResponse,
  getUserToken,
}) => {
  describe('PUT /api/v1/books', function () {
    const url = '/api/v1/books';
    const table = 'books';
    const mockedData = mockData[0];

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given empty data', function () {
      it('should return book not found', function (done) {
        request(app)
          .put(`${url}/example-book-id`)
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

    describe('given exist data', function () {
      before(async function () {
        await database.insert(mockData).into(table);
        // fake second data
        await database
          .insert({
            title: 'example title',
            slug: 'example-title',
            author: 'example author',
            file: 'example.pdf',
          })
          .into(table);
      });

      describe('given invalid body', function () {
        describe('when empty body', function () {
          it('should return errors message', function (done) {
            request(app)
              .put(`${url}/${mockedData.book_id}`)
              .set('Authorization', `Bearer ${token}`)
              .send({})
              .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.deep.equal(mockResponse.putWithEmptyBody());
                return done();
              });
          });
        });

        describe('when invalid data', function () {
          it('should return 400 with errors', function (done) {
            request(app)
              .put(`${url}/${mockedData.book_id}`)
              .set('Authorization', `Bearer ${token}`)
              .send({ title: 3423242 })
              .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body.errors).to.deep.equal({
                  title:
                    'title must be a `string` type, but the final value was: `3423242`.',
                });
                return done();
              });
          });
        });
      });

      describe('given valid body', function () {
        describe('when title is already exist', function () {
          it('should return error with title is already exist', function (done) {
            request(app)
              .put(`${url}/${mockedData.book_id}`)
              .set('Authorization', `Bearer ${token}`)
              .field('title', 'example title')
              .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.deep.equal(
                  mockResponse.putWithInvalidTitle()
                );
                return done();
              });
          });
        });

        describe('when title still available', function () {
          it('should successfully updated', function (done) {
            request(app)
              .put(`${url}/${mockedData.book_id}`)
              .set('Authorization', `Bearer ${token}`)
              .field('title', 'new update title')
              .field('author', mockedData.author)
              .field('city', mockedData.city)
              .field('publisher', mockedData.publisher)
              .field('year', mockedData.year)
              .field('type', mockedData.type)
              .field('desc', mockedData.desc)
              .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.equal(mockResponse.putWithValidBody());
                return done();
              });
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

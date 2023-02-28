const updateSpecs = (
  expect,
  request,
  app,
  database,
  mockData,
  mockResponse,
  getUserToken
) => {
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
          .set({ 'x-auth-token': token })
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
              .put(`${url}/${mockedData.book_id}`)
              .set({ 'x-auth-token': token })
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
            .put(`${url}/${mockedData.book_id}`)
            .set({ 'x-auth-token': token })
            .field('title', mockedData.title)
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

      after(async function () {
        await database(table).del();
      });
    });
  });
};

module.exports = updateSpecs;

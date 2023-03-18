const deleteSpecs = ({
  request,
  expect,
  app,
  database,
  mockData,
  mockResponse,
  getUserToken,
}) => {
  // MOCK fs using Jest.mock
  // const fs = require('fs');
  // const fileRemover = require('../../src/frameworks/utils/fileRemover');
  // jest.mock('fs', () => {
  //   const mFs = { unlink: jest.fn() };
  //   return mFs;
  // });

  describe('DELETE /api/v1/books', () => {
    const url = '/api/v1/books';
    // const table = 'books';

    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given data not found', () => {
      it('should return message with book not found', (done) => {
        request(app)
          .delete(`${url}/failed-id`)
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

    // describe('given exist data', () => {
    //   before(async () => {
    //     mockData[0].file = 'sample-file.pdf';
    //     await database.insert(mockData[0]).into(table);
    //   });

    //   it('should deleted successfully', (done) => {
    //     // fs.unlink.mockImplementationOnce((filename, callback) => {
    //     //   callback(null);
    //     // });
    //     // const logSpy = jest.spyOn(console, 'log');
    //     // const filename = 'sample.pdf';
    //     // fileRemover(filename);
    //     // expect(fs.unlink).toBeCalledWith(filename, expect.any(Function));
    //     // expect(logSpy).toBeCalledWith('file deleted successfully');

    //     request(app)
    //       .delete(`${url}/${mockData[0].book_id}`)
    //       .set('Authorization', `Bearer ${token}`)
    //       .end((err, res) => {
    //         expect(res.status).to.equal(200);
    //         expect(res.body).to.deep.equal(mockResponse.deleteWithExistData());
    //         return done();
    //       });
    //   });

    //   // it('should return empty table', async () => {
    //   //   const result = await database.select('book_id').table(table);
    //   //   expect(result).to.deep.equal([]);
    //   // });

    //   after(async () => {
    //     await database.del().where('book_id', mockData[0].book_id).table(table);
    //   });
    // });
  });
};

module.exports = deleteSpecs;

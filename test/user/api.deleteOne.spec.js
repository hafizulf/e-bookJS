const deleteSpecs = ({
  request,
  expect,
  app,
  database,
  mockData,
  mockResponse,
  getUserToken,
}) => {
  describe('DELETE /api/v1/users', () => {
    const url = '/api/v1/users';
    const table = 'users';
    let token;

    before(async () => {
      token = await getUserToken();
    });

    describe('given data not found', () => {
      it('should return message with user not found', (done) => {
        request(app)
          .delete(`${url}/example_user_id`)
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

    describe('given exist data', () => {
      before(async () => {
        mockData[0].email = 'anothermail@co';
        await database(table).insert(mockData[0]);
      });

      it('should deleted successfully', (done) => {
        request(app)
          .delete(`${url}/${mockData[0].user_id}`)
          .set({ 'x-auth-token': token })
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal(mockResponse.deleteWithExistData());
            return done();
          });
      });
    });
  });
};

module.exports = deleteSpecs;

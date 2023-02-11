const chai = require('chai');
const request = require('supertest');

const { expect } = chai;

describe('Main App', () => {
  let app = require('../src/frameworks/webserver/app');

  it('should respond successfully to /', async () => {
    const res = await request(app).get('/').expect(200);
    expect(res.text).to.equal('E-bookJS App!');
  });
});

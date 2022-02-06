const app = require('../index');
const request = require('supertest');

describe('서버테스트', () => {
  test('모든 영화의 정보를 요청받은 경우, 응답의 상태 코드는 200으로 설정되어야 합니다', async done => {
    return request(app)
      .get('/movies')
      .then(res => {
        const { status } = res;
        expect(status).toEqual(200);
        done();
      });
  });
  test('모든 영화의 정보를 요청받은 경우, 응답으로 모든 영화의 정보를 보내줘야 합니다', async (done) => {
    return request(app)
      .get('/movies')
      .then((res) => {
        const { body } = res;
        expect(Array.isArray(body)).toEqual(true);
        expect(body.length).toEqual(10);
        done();
      });
  });
  test('특정 id에 대한 영화정보를 요청받은 경우, 해당되는 영화의 정보를 응답으로 보내줘야 합니다', async done => {
    return request(app)
      .get('/movies/8462')
      .then(res => {
        const { body } = res;
        expect(body.id).toEqual(8462);
        expect(body.title).toEqual('Avengers: Infinity War');
        expect(body.summary).toEqual(
          'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.'
        );

        done();
      });
  });
  test('요청받은 영화의 id가 존재하지 않는경우, 응답의 상태 코드는 404으로 설정되어야 합니다.', async done => {
    return request(app)
      .get('/movies/4639')
      .then(res => {
        const { status } = res;
        expect(status).toEqual(404);
        done();
      });
  });
});

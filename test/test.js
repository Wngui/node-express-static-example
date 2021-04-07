//Require the test dependencies
const { assert } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);

//Short description of the tests
describe('PhotoScore Tests', () => {
  //Description of the test category
  describe('GET score', () => {
    //Test case name
    it('The score of "test.jpg" should be 9.', (done) => {
      //Send a GET request to our server, asking it for a score
      chai.request(server)
        .get('/score?name=test.jpg')
        .end((err, res) => {
          //Assert that 'test.jpg' is rated a 9 by our scoring algorithm
          var score = res.text;
          assert.equal(score, '9');
          done();
        });
    });
  });

});
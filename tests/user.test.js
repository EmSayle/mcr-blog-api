const User = require('../src/models/user');
const UserHelpers = require('./helpers/user-helpers');
const DataFactory = require('./helpers/data-factory');

describe('User', () => {
  describe('POST /user', () => {
    it('creates a new user', (done) => {
      const data = DataFactory.user();
      // console.log(data);

      UserHelpers.signup(data)
        .then(res => {
          expect(res.status).to.equal(201);
          // expect(res.body).not.to.have.property('password');

          User.findById(res.body._id, (err, user) => {
            expect(err).to.equal(null);
            expect(user.firstName).to.equal(data.firstName);
            expect(user.lastName).to.equal(data.lastName);
            expect(user.email).to.equal(data.email);
            done();
          });
        })
        .catch(error => done(error));
    });


    xit('requires a valid email', (done) => {
      const data = DataFactory.user({ email: 'mockEmail' });
      UserHelpers.signup(data)
        .then(res => {
          expect(res.status).to.equal(422);
          expect(res.body.errors.email).to.equal('Invalid email address');
          done();
        })
        .catch(error => done(error));
    });
  });
  xit('requires passwords to be 8 characters long', (done) => {
    const data = DataFactory.user({ password: 'pass' });
    UserHelpers.signup(data)
      .then(res => {
        expect(res.status).to.equal(422);
        expect(res.body.errors.password).to.equal('Password must be at least 8 characters long');
        done();
      })
      .catch(error => done(error));
  });
});

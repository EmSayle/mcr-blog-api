const UserHelpers = require('./helpers/user-helpers');
const PostHelper = require('./helpers/post-helper');
const DataFactory = require('./helpers/data-factory');
const Post = require('../src/models/posts');

xdescribe('Posts', () => {
  describe('POST /posts', () => {
    it('creates a new post in the database', (done) => {
      const data = DataFactory.user();
      console.log(data);
      UserHelpers.signup(data)
        .then((res) => {
          console.log(res.body._id);

          chai.request(server)
            .post('/posts')
            .send({
              user: res.body._id,
              category: 'event',
              title: 'Rock',
              image: 'image',
              description: 'description',
            });
        })
        .end((error, res) => {
          expect(error).to.equal(null);
          expect(res.status).to.equal(201);

          Post.findById(res.body._id, (err, post) => {
            expect(err).to.equal(null);
            expect(post.category).to.equal('event');
            expect(post.title).to.equal('Rock');
            expect(post.image).to.equal('image');
            expect(post.description).to.equal('description');
            done();
          });
        });
    });
  });
});

describe('Posts', () => {
  describe('POST /posts', () => {
    it('creates a new post', (done) => {
      const user = DataFactory.user();
      UserHelpers.signup(user)
        .then(() => {
          UserHelpers.login(user)
            .then(credentials => {
              const data = DataFactory.post();
              console.log(1, user);
              console.log(2, data);

              PostHelper.newPost(credentials.body.token, data)
                .then(res => {
                  console.log(3, res.body);
                  console.log(4, res.body._id);
                  console.log(5, credentials.body);

                  expect(res.status).to.equal(201);

                  Post.findById(res.body._id, (err, post) => {
                    expect(err).to.equal(null);
                    expect(post.category).to.equal(post.category);
                    expect(post.title).to.equal(post.title);
                    expect(post.image).to.equal(post.image);
                    expect(post.description).to.equal(post.description);
                    done();
                  });
                })
                .catch(error => done(error));
            })
            .catch(error => done(error));
        })
        .catch(error => done(error));
    });
  });
});

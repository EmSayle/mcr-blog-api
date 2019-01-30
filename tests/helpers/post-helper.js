exports.newPost = (credentials, post) => new Promise((resolve, reject) => {
  chai.request(server)
    .post('/posts')
    .set('Authorizer', credentials)
    .send(post)
    .end((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
});

const faker = require('faker');

exports.user = (options = {}) => ({
  firstName: options.firstName || faker.name.firstName(),
  lastName: options.lastName || faker.name.lastName(),
  email: options.email || faker.internet.email(),
  password: options.password || faker.internet.password(),
});

exports.post = (options = {}) => ({
  category: options.category || faker.lorem.words(),
  title: options.title || faker.lorem.words(),
  image: options.image || faker.lorem.words(),
  description: options.description || faker.lorem.words(),
});

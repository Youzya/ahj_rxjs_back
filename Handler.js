const { faker } = require('@faker-js/faker');

class Handler {
  constructor() {
    this.mails = [
      {
        from: faker.internet.email(),
        theme: faker.hacker.phrase(),
        text: faker.lorem.paragraph(),
        status: 'unread',
        date: faker.date.past(),
      },
      {
        from: faker.internet.email(),
        theme: faker.hacker.phrase(),
        text: faker.lorem.paragraph(),
        status: 'unread',
        date: faker.date.past(),
      },
      {
        from: faker.internet.email(),
        theme: faker.hacker.phrase(),
        text: faker.lorem.paragraph(),
        status: 'unread',
        date: faker.date.past(),
      },
      {
        from: faker.internet.email(),
        theme: faker.hacker.phrase(),
        text: faker.lorem.paragraph(),
        status: 'unread',
        date: faker.date.past(),
      },
      {
        from: faker.internet.email(),
        theme: faker.hacker.phrase(),
        text: faker.lorem.paragraph(),
        status: 'unread',
        date: faker.date.past(),
      },
    ];

    this.log = [];
  }
}

module.exports = {
  Handler,
};

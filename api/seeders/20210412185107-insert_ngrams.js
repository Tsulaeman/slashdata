module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('ngrams', [
    {
      body: 'Hello!!!',
      isCaseSensitive: true,
      ngram: 2,
      length: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'The quick brown fox jumps over the lazy dog',
      isCaseSensitive: false,
      ngram: 2,
      length: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ngrams', null, {});
  },
};

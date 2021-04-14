module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ngrams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isCaseSensitive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      ngram: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      length: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ngrams');
  },
};

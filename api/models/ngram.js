import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Ngram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }

  Ngram.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isCaseSensitive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      ngram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
    },
    {
      sequelize,
      modelName: 'ngram',
    },
  );
  return Ngram;
};

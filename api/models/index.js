import Sequelize from 'sequelize';
import configJson from '../config/config.json';
import NgramModel from './ngram';

const env = process.env.NODE_ENV || 'development';
const config = configJson[env];

// eslint-disable-next-line import/no-mutable-exports
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// add each model here
const Ngram = NgramModel(sequelize, Sequelize);

const models = {
  Ngram,
};
// run Associations
Object.keys(models).forEach((modelName) => {
  // eslint-disable-next-line no-prototype-builtins
  if (models[modelName].hasOwnProperty('associate')) {
    models[modelName].associate(models);
  }
});

export {
  sequelize,
  Ngram,
};

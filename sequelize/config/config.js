module.exports = {
  development: {
    username: 'postgres',
    password: 'admin123',
    database: 'learning_sequelize',
    host: '0.0.0.0',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'admin123',
    database: 'learning_sequelize',
    host: '0.0.0.0',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  }
}

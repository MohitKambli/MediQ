const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('patient_appointment', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully!');
  } catch (err) {
    console.error('Unable to connect to PostgreSQL:', err);
  }
};

module.exports = { sequelize, connectDB };
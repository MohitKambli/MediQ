const { connectDB } = require('./src/config/db');
const Patient = require('./src/models/patient');
const Provider = require('./src/models/provider');
const Appointment = require('./src/models/appointment');

const initialize = async () => {
  await connectDB();

  // Sync models with the database
  await Patient.sync();
  await Provider.sync();
  await Appointment.sync();

  console.log('Models synced with the database!');
};

initialize();
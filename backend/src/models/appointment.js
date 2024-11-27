const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Patient = require('./patient');
const Provider = require('./provider');

const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  patient_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Patient,
      key: 'id',
    },
  },
  provider_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Provider,
      key: 'id',
    },
  },
  time_slot: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('booked', 'cancelled', 'completed'),
    defaultValue: 'booked',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'appointments',
  timestamps: false,
});

module.exports = Appointment;
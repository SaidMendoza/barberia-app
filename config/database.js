const { Sequelize } = require('sequelize');

// Para producción en Render, usa DATABASE_URL directamente
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
});

// Verificar conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la BD establecida'))
  .catch(err => console.error('❌ Error conectando a la BD:', err));

module.exports = sequelize;
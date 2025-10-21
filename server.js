const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5000;

// Sincronizar base de datos y iniciar servidor
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => console.log('Error al conectar con la BD:', err));
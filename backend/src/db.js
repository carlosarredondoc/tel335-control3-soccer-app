import { Sequelize } from 'sequelize';


export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite'
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('La Conexion a la base de datos se ha establecido satisfactoriamente');
        

      } catch (error) {
        console.error('No se puede conectar a la base de datos:', error);
      }
}


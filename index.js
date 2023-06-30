import sequelize from './app/config/database.config.js';
import app from './app/app.js';
// import "./app/models/Usuario.models.js"

//importar asociaciones
import './app/models/asociaciones.js';

const main = async () => {
	try {
		await sequelize.authenticate();
		console.log('Nos hemos conectado con éxito.');
		await sequelize.sync({ force: false, alter: true }); //force: false cuando está en producción.
		let PORT = 3000;
		app.listen(PORT, () =>
			console.log('Servidor escuchando en http://localhost:' + PORT)
		);
	} catch (error) {
		console.log('Ha ocurrido un error: ', error);
	}
};
main();

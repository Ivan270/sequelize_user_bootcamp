import Sequelize from 'sequelize';

const sequelize = new Sequelize('db_bootcamp', 'postgres', '2103', {
	host: 'localhost',
	dialect: 'postgres',
});

export default sequelize;

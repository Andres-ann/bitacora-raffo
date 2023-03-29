import { Sequelize } from 'sequelize';

const db = new Sequelize(
	'bitacora-raffo',
	'2x73t01ag6lefgyr5klv',
	'pscale_pw_r4woUHxTe48e7X7Aklbucs4vRK3INpLBQWV3gTe10yY',
	{
		host: 'aws.connect.psdb.cloud',
		dialect: 'mysql',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: true,
			},
		},
	}
);

export default db;

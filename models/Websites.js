/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Websites', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		alexa: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'Websites',
		timestamps: false
	});
};

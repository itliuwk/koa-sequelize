/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('apps', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		app_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'apps',
		timestamps: false
	});
};

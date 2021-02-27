/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('access_log', {
		aid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		site_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		count: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		}
	}, {
		tableName: 'access_log',
		timestamps: false
	});
};

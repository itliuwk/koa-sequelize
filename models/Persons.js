/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Persons', {
		PersonsId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		firstName: {
			type: DataTypes.STRING(201),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'Persons',
		timestamps: false
	});
};

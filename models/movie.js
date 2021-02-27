/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('movie', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		isPlay: {
			type: DataTypes.INTEGER(255),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		author: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		duration: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		categories: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pubdate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		rate: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		summary: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		poster: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		casts: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cover: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		video: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		movieTypes: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'movie',
		timestamps: false
	});
};

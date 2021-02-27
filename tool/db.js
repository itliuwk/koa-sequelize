const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");

const basePathG = path.join(__dirname, '../models');

let models = fs.readdirSync(basePathG);

dbInit();

async function dbInit() {
    let sequelize = await new Sequelize(
        'movie',     //数据库的库名
        'movie',         //mysql数据库的用户名
        '101207302das',     //mysql数据库的密码
        {
            'dialect': 'mysql',     // 数据库使用mysql
            'host': '106.52.xxx.xx', //主机名   // 数据库服务器ip
            'port': '3306',         // 数据库运行端口
            'timestamp': false,     // 这个参数为true是MySQL会自动给每条数据添加createdAt和updateAt字段
            'quoteIdentifiers': true
        }
    );
    models.forEach((item, index) => {
        let name = item.substr(0, item.length - 3);
        name = name.substring(0, 1).toUpperCase() + name.substring(1)   //首字母大写

        module.exports[name] = require(basePathG + `/${item}`)(sequelize, Sequelize.DataTypes)
    });
    // sequelize.sync({
    //     force: false
    // })
}







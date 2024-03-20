const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Statue = sequelize.define('statues', { // Change 'Statue' to 'statues'
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'statues'
});

module.exports = Statue;

// npx sequelize-cli init
// npx sequelize-cli model:generate --name Statue --attributes name:string,cost:integer,image:string
// npx sequelize-cli migration:generate --name create-statues-table
// npx sequelize-cli db:migrate

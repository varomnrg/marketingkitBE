const Sequelize = require('sequelize')
const db = require('../database/db')

let category = db.define('bopuroOrder',
    {
        bopuroOrder_id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        namaCustomer: Sequelize.STRING,
        emailCustomer: Sequelize.STRING,
        noTelpCustomer: Sequelize.STRING,
        alamatCustomer: Sequelize.TEXT,
        catatan: Sequelize.TEXT,
        pesanan: Sequelize.TEXT
    },{
        freezeTableName: true,
        timestamps: false,
});

module.exports = category;

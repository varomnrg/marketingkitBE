const Sequelize = require('sequelize')
const db = require('../database/db')

let category = db.define('marketingKitOrder',
    {
        marketingKitOrder_id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        namaCustomer: Sequelize.STRING,
        emailCustomer: Sequelize.STRING,
        noTelpCustomer: Sequelize.STRING,
        alamatCustomer: Sequelize.TEXT,
        catatan: Sequelize.TEXT,
        tipe: Sequelize.STRING,
        warna: Sequelize.STRING,
        quantity: Sequelize.INTEGER
    },{
        freezeTableName: true,
        timestamps: false,
});

module.exports = category;

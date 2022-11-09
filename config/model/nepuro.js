const Sequelize = require('sequelize')
const db = require('../database/db')

let category = db.define('nepuroOrder',
    {
        nepuroOrder_id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        namaCustomer: Sequelize.STRING,
        emailCustomer: Sequelize.STRING,
        alamatCustomer: Sequelize.TEXT,
        noTelpCustomer: Sequelize.STRING,
        catatan: Sequelize.TEXT,
        tipe: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        dimensi: Sequelize.INTEGER,
        warna: Sequelize.STRING
    },{
        freezeTableName: true,
        timestamps: false,
});

module.exports = category;
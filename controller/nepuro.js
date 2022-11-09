const model = require('../config/model/index');
const controller = {};
const transporter = require('../config/mailer');
//get Nepuro order
controller.getNepuroOrder = async function (req, res){
    try{
        const nepuroOrder = await model.nepuro.findAll();
        res.json({
            success: true,
            message: "Nepuro Order",
            data: nepuroOrder
        })
    }catch(err){
        res.json({
            success: false,
            message: "Nepuro Order",
            data: err
        })
    }
}

//post nepuro order
controller.addNepuroOrder = async function (req, res){
    try{
        const nepuroOrder = await model.nepuro.create({
            namaCustomer: req.body.nama,
            emailCustomer: req.body.email,
            alamatCustomer: req.body.alamat,
            noTelpCustomer: req.body.nomerTelepon,
            catatan: req.body.catatan,
            tipe: req.body.tipe,
            quantity: req.body.quantity,
            dimensi: req.body.dimensi,
            warna: req.body.warna
        })
        res.json({
            success: true,
            message: "nepuro Order",
            data: nepuroOrder
        })
        var mailOptions = {
            from: 'crewnesiatest@gmail.com',
            to: req.body.email,
            subject: 'Konfirmasi Pesanan Order Nepuro',
            text: `Halo ${req.body.nama},\nTim kami telah menerima pesanan anda!\n\nBerikut adalah detail pesanan anda:\nNama: ${req.body.nama}\nEmail: ${req.body.email}\nNo. Telepon: ${req.body.nomerTelepon}\nAlamat: ${req.body.alamat}\nCatatan: ${req.body.catatan}\nTipe: ${req.body.tipe}\nQuantity: ${req.body.quantity}\nDimensi: ${req.body.dimensi}\nWarna: ${req.body.warna}\n\nJika Pesanan anda sudah benar, silahkan lakukan konfirmasi dengan menjawab email ini dan kami akan mengirimkan invoice pesanan anda!\nTerima Kasih!\n\n-Tim Crewnesia`
          };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }catch(err){
        res.json({
            success: false,
            message: "nepuro Order",
            data: err
        })
    }
}

module.exports = controller;
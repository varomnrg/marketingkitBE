const model = require('../config/model/index');
const controller = {};
const transporter = require('../config/mailer');

//get bopuro order
controller.getBopuroOrder = async function (req, res){
    try{
        const bopuroOrder = await model.bopuro.findAll();
        res.json({
            success: true,
            message: "Bopuro Order",
            data: bopuroOrder
        })
    }catch(err){
        res.json({
            success: false,
            message: "Bopuro Order",
            data: err
        })
    }
}

//post bopuro order
controller.addBopuroOrder = async function (req, res){
    const pesan = req.body.pesanan
    const pesanan = pesan.toString()
    try{
        const bopuroOrder = await model.bopuro.create({
            namaCustomer: req.body.nama,
            emailCustomer: req.body.email,
            noTelpCustomer: req.body.nomerTelepon,
            alamatCustomer: req.body.alamat,
            catatan: req.body.catatan,
            pesanan: pesanan
        })
        res.json({
            success: true,
            message: "Bopuro Order",
            data: bopuroOrder
        })
        var mailOptions = {
            from: 'crewnesiatest@gmail.com',
            to: req.body.email,
            subject: 'Konfirmasi Pesanan Order Bopuro',
            text: `Halo ${req.body.nama},\nTim kami telah menerima pesanan anda!\n\nBerikut adalah detail pesanan anda:\nNama: ${req.body.nama}\nEmail: ${req.body.email}\nNo. Telepon: ${req.body.nomerTelepon}\nAlamat: ${req.body.alamat}\nCatatan: ${req.body.catatan}\nPesanan: ${req.body.pesanan}\nJika Pesanan anda sudah benar, silahkan lakukan konfirmasi dengan menjawab email ini dan kami akan mengirimkan invoice pesanan anda!\nTerima Kasih!\n\n-Tim Crewnesia`
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
            message: "Bopuro Order",
            data: err
        })
    }
}


module.exports = controller;
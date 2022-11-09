const model = require('../config/model/index');
const controller = {};
const transporter = require('../config/mailer');

//post bopuro order
controller.addMarketingKit = async function (req, res){
    try{
        const marketingKitOrder = await model.marketingkit.create({
            namaCustomer: req.body.nama,
            emailCustomer: req.body.email,
            noTelpCustomer: req.body.nomerTelepon,
            alamatCustomer: req.body.alamat,
            catatan: req.body.catatan,
            tipe: req.body.tipe,
            warna: req.body.warna,
            quantity: req.body.quantity
        })
        res.json({
            success: true,
            message: "Marketing Kit Order",
            data: marketingKitOrder
        })
        const types = req.body.tipe
        const type = types.split(/(?=[A-Z])(?<![A-Z])/).join(' ')
        var mailOptions = {
            from: 'crewnesiatest@gmail.com',
            to: req.body.email,
            subject: `Konfirmasi Pesanan Order ${type}`,
            text: `Halo ${req.body.nama},\nTim kami telah menerima pesanan anda!\n\nBerikut adalah detail pesanan anda:\nNama: ${req.body.nama}\nEmail: ${req.body.email}\nNo. Telepon: ${req.body.nomerTelepon}\nAlamat: ${req.body.alamat}\nCatatan: ${req.body.catatan}\nTipe: ${type}\nWarna: ${req.body.warna}\nQuantity: ${req.body.quantity}\n\nJika Pesanan anda sudah benar, silahkan lakukan konfirmasi dengan menjawab email ini dan kami akan mengirimkan invoice pesanan anda!\nTerima Kasih!\n\n-Tim Crewnesia`
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
            message: "Marketing Kit Order",
            data: err
        })
    }
}


module.exports = controller;
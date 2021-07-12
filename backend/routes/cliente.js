const router = require("express").Router();
const pool = require("../database/keys");

const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

//GET
router.route("/get").get(async (req, res) => {
  try {
    const clientes = await pool.query("SELECT * FROM cliente");
    res.status(200).json({
      status: "success",
      results: clientes.rows.length,
      data: { clientes: clientes.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetId-Admi
router.route("/getAdmi/:id_cliente").get(async (req, res) => {
  try {
    console.log("hola")
    const { id_cliente } = req.params;
    const clientes = await pool.query(
      "SELECT * FROM cliente WHERE ID_CLIENTE=$1", 
      [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { clientes: clientes.rows[0] },
    });
    //console.log(cliente)
  } catch (err) {
    console.error(err.message);
  }
});

//GetID-Cliente
router.route("/get/:id_cliente").get(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const producto = await pool.query(
      "SELECT * FROM cliente WHERE ID_cliente=$1", 
      [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { cliente: producto.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//DELETE
router.route("/delete/:id_cliente").delete(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const clienteDelete = await pool.query(
      "DElETE FROM cliente WHERE ID_CLIENTE=$1",
      [id_cliente]
    );
    res.status(200).json({
      message:'Cliente eliminado'
    });
  } catch (err) {
    console.error(err.message);
  }
});

function randomSN (length){
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


router.route("/imageUpdate/:id_cliente").put(async (req, res) => {
  var file_extension = mime.extension(req.files.file.mimetype);
  var name = randomSN(30) + '.' + file_extension;
  
  var oldPath = req.files.file.tempFilePath;
  var newPath = path.join(path.resolve(__dirname, '..'), `/public/uploads/${name}`);
  //console.log(path.resolve(__dirname))
  //console.log(newPath)

  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err
    console.log('Successfully renamed - AKA moved!')
  })
  
  try {
    console.log(name);
    console.log(req.body.id);
    const { id_cliente } = req.body.id;
    const { img_cliente } = name;
    const cliente = await pool.query(
      "UPDATE CLIENTE SET IMG_CLIENTE=$1 WHERE ID_CLIENTE=$2 returning *",
      [name,req.body.id]
    );
    res.status(200).json({
      status:"success",
      data:{cliente:cliente.rows[0]},
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.route("/imageUpdateAdmi/:id_cliente").put(async (req, res) => {
  try {
    console.log(req.body.id_cliente)
    //const { id_cliente } = req.body.id;
    const cliente = await pool.query(
      "UPDATE CLIENTE SET IMG_CLIENTE='usuario.jpg' WHERE ID_CLIENTE=$1 returning *",
      [req.body.id_cliente]
    );
    res.status(200).json({
      status:"success",
      data:{cliente:cliente.rows[0]},
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.route("/perfilUpdate/:id_cliente").put(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const { nombre_cliente } = req.body;
    const { email_cliente } = req.body;
    const { password_cliente } = req.body;
    const { direccion_cliente } = req.body;
    const { dni } = req.body;
    const cliente = await pool.query(
      "UPDATE CLIENTE SET NOMBRE_CLIENTE=$1, EMAIL_CLIENTE=$2, PASSWORD_CLIENTE=$3, DIRECCION_CLIENTE=$4, DNI=$5 WHERE ID_CLIENTE=$6 returning *",
      [nombre_cliente,email_cliente,password_cliente,direccion_cliente,dni,id_cliente]
    );
    res.status(200).json({
      status:"success",
      data:{cliente:cliente.rows[0]},

    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;


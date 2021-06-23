const router = require("express").Router();
const pool = require("../database/keys");

const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

//Create
router.route("/create").post(async (req, res) => {
  try {
    const { nombre_proveedor } = req.body;
    const { ruc } = req.body;
    const { razon_social } = req.body;
    const { utilidades } = req.body;
    const { id_cuenta_proveedor } = req.body;
    const { id_local } = req.body;

    const newProveedor = await pool.query(
      "INSERT INTO tbl_proveedor(nombre_proveedor,ruc,razon_social,utilidades,id_cuenta_proveedor,id_local) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [
        nombre_proveedor,
        ruc,
        razon_social,
        utilidades,
        id_cuenta_proveedor,
        id_local,
      ]
    );
    res.status(200).json({
      status: "succes",
      data: {
        proveedores: newProveedor.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GET
router.route("/get").get(async (req, res) => {
  try {
    const proveedores = await pool.query("SELECT * FROM proveedor");
    res.status(200).json({
      status: "success",
      results: proveedores.rows.length,
      data: { proveedores: proveedores.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetId
router.route("/get/:id_proveedor").get(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const proveedores = await pool.query(
      "SELECT * FROM proveedor WHERE id_proveedor=$1",
      [id_proveedor]
    );
    res.status(200).json({
      status: "success",
      data: { proveedores: proveedores.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetProveedoresdelProductoAseleccionar
router.route("/getP/:id_proveedor").get(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const proveedores = await pool.query(
      "SELECT id_proveedor,nombre_proveedor,email_proveedor FROM proveedor WHERE id_proveedor=$1",
      [id_proveedor]
    );
    res.status(200).json({
      status: "success",
      data: { proveedores: proveedores.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//Update
router.route("/perfilUpdate/:id_proveedor").put(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const { nombre_proveedor } = req.body;
    const { email_proveedor } = req.body;
    const { direccion_proveedor } = req.body;
    const { ruc } = req.body;
    const proveedores = await pool.query(
      "UPDATE proveedor SET NOMBRE_PROVEEDOR=$1, EMAIL_PROVEEDOR=$2, DIRECCION_PROVEEDOR=$3, RUC=$4 WHERE ID_PROVEEDOR=$5 returning *",
      [nombre_proveedxor, email_proveedor, direccion_proveedor, ruc, id_proveedor]
    );
    res.status(200).json({
      status: "success",
      data: { proveedores: proveedores.rows[0] },
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

// Image
router.route("/imageUpdate/:id_proveedor").put(async (req, res) => {
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
    const { id_proveedor } = req.body.id;
    const { img_proveedor } = name;
    const proveedor = await pool.query(
      "UPDATE PROVEEDOR SET IMG_PROVEEDOR=$1 WHERE ID_PROVEEDOR=$2 returning *",
      [name,req.body.id]
    );
    res.status(200).json({
      status:"success",
      data:{proveedores:proveedores.rows[0]},
    });
  } catch (err) {
    console.error(err.message);
  }
});


//Delete
router.route("/delete/:id_proveedor").delete(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const proveedorAeliminar = await pool.query(
      "DElETE FROM tbl_proveedor WHERE id_proveedor=$1",
      [id_proveedor]
    );
    res.status(200).json("Proveedor eliminado");
  } catch (err) {
    console.error(err.message);
  }
});

//GetId
router.route("/get/:id_proveedor").get(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const proveedor = await pool.query(
      "SELECT * FROM tbl_producto WHERE ID_proveedor=$1",
      [id]
    );
    res.status(200).json({
      status: "success",
      data: { proveedor: proveedor.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.route("/getProductos-Proveedor/:id_proveedor").get(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const proveedor = await pool.query(
      "select p.visible, p.img_producto, pro.nombre_proveedor ,cat.categoria, p.id_producto,p.nombre,p.precio,p.stock,p.detalle,p.id_proveedor,p.id_categoria from tbl_producto p ,tbl_categoria cat,proveedor pro  where p.id_categoria=cat.id_categoria and pro.id_proveedor=p.id_proveedor and  p.id_proveedor=$1",
      [id_proveedor]
    );
    res.status(200).json({
      status: "success",
      data: { productos: proveedor.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});




module.exports = router;

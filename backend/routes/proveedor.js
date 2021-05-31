const router = require("express").Router();
const pool = require("../database/keys");

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
router.route("/update/:id_proveedor").put(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const { nombre_proveedor } = req.body;
    const { ruc } = req.body;
    const { razon_social } = req.body;
    const { utilidades } = req.body;
    const { id_cuenta_cliente } = req.body;
    const { id_local } = req.body;
    const proveedores = await pool.query(
      "UPDATE tbl_proveedor SET NOMBRE_PROVEEDOR=$1, RUC=$2, RAZON_SOCIAL=$3, UTILIDADES=$4, ID_CUENTA_CLIENTE=$5,ID_LOCAL=$6 WHERE id_proveedor=$7 returning *",
      [
        nombre_proveedor,
        ruc,
        razon_social,
        utilidades,
        id_cuenta_cliente,
        id_local,
        id_proveedor,
      ]
    );
    res.status(200).json({
      status: "success",
      data: { proveedores: proveedores.rows[0] },
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

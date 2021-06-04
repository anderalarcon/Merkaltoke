const router = require("express").Router();
const pool = require("../database/keys");

//Create
router.route("/create").post(async (req, res) => {
  try {
    const { nombre } = req.body;
    const { precio } = req.body;
    const { stock } = req.body;
    const { detalle } = req.body;
    const { id_proveedor } = req.body;
    const { id_categoria } = req.body;
    const { img_producto } = req.body;
    console.log(id_proveedor);
    const newProducto = await pool.query(
      "INSERT INTO tbl_producto(nombre,precio,stock,detalle,id_proveedor,id_categoria,img_producto,visible) VALUES($1,$2,$3,$4,$5,$6,$7,'no') RETURNING *",
      [nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto]
    );
    res.status(200).json({
      status: "succes",
      data: {
        producto: newProducto.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error ",
      error,
    });
  }
});

//GET
router.route("/get").get(async (req, res) => {
  try {
    const productos = await pool.query("SELECT * FROM tbl_producto");

    res.status(200).json({
      status: "success",
      results: productos.rows.length,
      data: { productos: productos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetId
router.route("/get/:id_producto").get(async (req, res) => {
  try {
    const { id_producto } = req.params;
    const producto = await pool.query(
      "SELECT * FROM tbl_producto WHERE ID_producto=$1",
      [id_producto]
    );
    res.status(200).json({
      status: "success",
      data: { producto: producto.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//Update
router.route("/update/:id_producto").put(async (req, res) => {
  try {
    const { id_producto } = req.params; //corregir esto
    const { nombre } = req.body;
    const { precio } = req.body;
    const { stock } = req.body;
    const { detalle } = req.body;
    const { id_proveedor } = req.body;
    const { id_categoria } = req.body;
    const { img_producto } = req.body;
    const producto = await pool.query(
      "UPDATE tbl_producto SET NOMBRE=$1, PRECIO=$2, STOCK=$3, DETALLE=$4, ID_PROVEEDOR=$5, ID_CATEGORIA=$6, IMG_PRODUCTO=$7 WHERE ID_PRODUCTO=$8 returning *",
      [nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto, id_producto]
    );
    res.status(200).json({
      status: "success",
      data: { producto: producto.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//Delete
router.route("/delete/:id_producto").delete(async (req, res) => {
  try {
    const { id_producto } = req.params;
    const productoAeliminar = await pool.query(
      "DElETE FROM tbl_producto WHERE ID_producto=$1",
      [id_producto]
    );
    res.status(200).json("Producto eliminada");
  } catch (error) {
    res.status(500).json({
      message:
        "El producto se encuentra asociado a pedidos realizados anteriormente por lo cual , no es posible eliminarlo.Si desea puede volverlo 'No visible' ",
      error,
    });
  }
});

//update stock de productos al realizar compra
router.route("/updateStock/:id_producto/:cantidad").put(async (req, res) => {
  try {
    const { id_producto } = req.params;
    const { cantidad } = req.params;

    const carrito = await pool.query(
      "UPDATE tbl_producto SET stock=stock-$1 where id_producto=$2 returning *",
      [cantidad, id_producto]
    );
    res.status(200).json({
      status: "success",
      data: { carrito: carrito.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

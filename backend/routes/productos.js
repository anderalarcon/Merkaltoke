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

    const newProducto = await pool.query(
      "INSERT INTO tbl_producto(nombre,precio,stock,detalle,id_proveedor,id_categoria) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [nombre,precio,stock,detalle,id_proveedor,id_categoria]
    );
    res.status(200).json({
      status: "succes",
      data: {
        producto: newProducto.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
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
router.route("/get/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await pool.query("SELECT * FROM tbl_producto WHERE ID=$1", [id]);
    res.status(200).json({
      status: "success",
      data: { producto: producto.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//Update
router.route("/update/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const { precio } = req.body;
    const { stock } = req.body;
    const { detalle } = req.body;
    const { id_proveedor } = req.body;
    const { id_categoria } = req.body;
    const producto = await pool.query(
      "UPDATE tbl_producto SET NOMBRE=$1, PRECIO=$2, STOCK=$3, DETALLE=$4, ID_PROVEEDOR=$5, ID_CATEGORIA=$6 WHERE ID=$7 returning *",
      [nombre,precio,stock,detalle,id_proveedor,id_categoria,id]
    );
    res.status(200).json({
      status:"success",
      data:{producto:producto.rows[0]},

    });
  } catch (err) {
    console.error(err.message);
  }
});

//Delete
router.route("/delete/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const productoAeliminar = await pool.query("DElETE FROM tbl_producto WHERE ID=$1", [
      id,
    ]);
    res.status(200).json("Area eliminada");
  } catch (err) {
    console.error(err.message);
  }
});


//update stock de productos al realizar compra 
router.route("/updateStock/:id_producto/:cantidad").put(async (req, res) => {
  try {
    const { id_producto } = req.params;
    const { cantidad } = req.params;

    const carrito = await pool.query(
      "UPDATE tbl_producto SET stock=stock-$1 where id_producto=$2 returning *",
      [cantidad,id_producto]
    );
    res.status(200).json({
      status:"success",
      data:{carrito:carrito.rows[0]},

    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;


const router = require("express").Router();
const pool = require("../database/keys");


//Insertar al carrito
router.route("/create").post(async (req, res) => {
  try {
    const { cantidad } = req.body;
    const { suma } = req.body;
    const { id_cliente } = req.body;
    const { id_producto } = req.body;
 
    const newProducto = await pool.query(
      "INSERT INTO tbl_carrito(cantidad,suma,id_cliente,id_producto) VALUES($1,$2,$3,$4) RETURNING *",
      [cantidad,suma,id_cliente,id_producto]
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

//Mostrar todos los productos que tiene el carrito en vista carrito
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

//Get carrito id del cliente en sesion
router.route("/getCarritoId/:id_cliente").get(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const cliente = await pool.query("SELECT cl.nombre_cliente,car.id_carrito FROM tbl_carrito car,cliente cl WHERE car.id_cliente=cl.id_cliente and cl.id_cliente=$1;", [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { cliente: cliente.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = router;


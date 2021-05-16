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

//aumentar cantidad - rosher
router.route("/aumentar_cant_carrito/:carrito_id/:producto_id").put(async (req, res) => {
  try {
    
    const { carrito_id } = req.body;
    const { producto_id } = req.body;
 
    const newProducto = await pool.query(
      "update carrito_producto set cantidad_id=cantidad_id+1 where carrito_id=$1 and producto_id=$2;",
      [carrito_id,producto_id]
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

//tabla carro
router.route("/getCarrito_tabla/:id_carrito").get(async (req, res) => {
  try {
    const { id_carrito } = req.params;
    const cliente = await pool.query("select distinct(c.producto_id), c.carrito_id ,c.cantidad_id ,p.precio, p.nombre from carrito_producto c, tbl_producto p where c.carrito_id=$1 and c.producto_id=p.id_producto order by c.producto_id;", [id_carrito]);
    res.status(200).json({
      status: "success",
      data: { cliente: cliente.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//insertar tabla intermedia carrito_producto
router.route("/insertMid/:carrito_id/:producto_id").post(async (req, res) => {
  try {
    const {carrito_id } = req.params;
    const { producto_id } = req.params;

   
 
    const carrito_producto = await pool.query(
      "INSERT INTO carrito_producto(carrito_id,producto_id,cantidad_id) VALUES($1,$2,$3) RETURNING *",
      [carrito_id,producto_id,1]
    );
    res.status(200).json({
      status: "succes",
      data: {
        carrito_producto: carrito_producto.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});



module.exports = router;


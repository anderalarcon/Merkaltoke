const router = require("express").Router();
const pool = require("../database/keys");



//GetId
router.route("/get/:id_cliente").get(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const producto = await pool.query("SELECT * FROM cliente WHERE ID_cliente=$1", [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { cliente: producto.rows[0] },
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



module.exports = router;


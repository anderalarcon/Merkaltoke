const router = require("express").Router();
const pool = require("../database/keys");



//Create
router.route("/create").post(async (req, res) => {
  try {
/*     const { fecha } = req.body;
    const { estado } = req.body; */
    const { total } = req.body;
    const { id_cliente } = req.body;
 /*    const { id_metodo } = req.body; */

    const newPedido = await pool.query(
      "INSERT INTO tbl_pedido(fecha,estado,total,id_cliente,id_metodo) VALUES($1,$2,$3,$4,$5) RETURNING *",
      ['2021-05-16','Entregado',total,id_cliente,1]
    );
    res.status(200).json({
      status: "succes",
      data: {
        pedido: newPedido.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GET
router.route("/get").get(async (req, res) => {
  try {
  
    const pedidos = await pool.query("SELECT * FROM tbl_pedido");

    res.status(200).json({
      status: "success",
      results: pedidos.rows.length,
      data: { pedidos: pedidos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetId
router.route("/get/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await pool.query("SELECT * FROM tbl_pedido WHERE ID=$1", [id]);
    res.status(200).json({
      status: "success",
      data: { pedido: pedido.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetId_cliente
router.route("/get_pedidos_cliente/:id_cliente").get(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const pedido = await pool.query("SELECT * FROM tbl_pedido WHERE id_cliente=$1 ", [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { pedido: pedido.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});






module.exports = router;
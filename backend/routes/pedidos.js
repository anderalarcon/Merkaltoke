const router = require("express").Router();
const pool = require("../database/keys");



//Create
router.route("/create").post(async (req, res) => {
  try {
/*     const { fecha } = req.body;
    const { estado } = req.body; */
    const { total } = req.body;
    const { id_cliente } = req.body;
     const { id_metodo } = req.body; 

    const newPedido = await pool.query(
      "INSERT INTO tbl_pedido(fecha,estado,total,id_cliente,id_metodo) VALUES(CURRENT_TIMESTAMP,$1,$2,$3,$4) RETURNING *",
      ['Por Confirmar',total,id_cliente,id_metodo]
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
    const pedido = await pool.query("select p.id_pedido, p.fecha,p.estado,p.total,p.id_cliente,p.id_metodo,m.metodo from tbl_pedido p , tbl_metodo_pago m where p.id_metodo=m.id_metodo_pago and id_cliente=$1; ", [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { pedido: pedido.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});


//Insertar en tbl_detalle_pedido
router.route("/insertPedido_detalle/:id_pedido").post(async (req, res) => {
  try {
    const { cantidad_id } = req.body;
    const { precio } = req.body;
    const { id_pedido } = req.params;
    const { producto_id } = req.body;
    

    const pedido_detalle = await pool.query(
      "INSERT INTO tbl_pedido_detalle(cantidad,precio,id_pedido,id_producto) VALUES($1,$2,$3,$4) RETURNING *",
      [cantidad_id,precio,id_pedido,producto_id]
    );
    res.status(200).json({
      status: "succes",
      data: {
        pedido_detalle: pedido_detalle.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});


router.route("/getLastIdPedido_detalle").get(async (req, res) => {
  try {
  
    const last_id = await pool.query("select MAX(id_pedido) from tbl_pedido;");

    res.status(200).json({
      status: "success",
      results: last_id.rows.length,
      data: { last: last_id.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});


//chapamos para la factura acaaaaaa 


router.route("/get_pedidos_detalle/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const productosdelpedido = await pool.query("select pd.id_pedido_detalle,pd.cantidad,pd.precio,pd.id_pedido,pd.id_producto,pr.nombre,pr.detalle from tbl_pedido_detalle pd,tbl_producto pr where pd.id_producto=pr.id_producto and id_pedido=$1; ", [id_pedido]);
    res.status(200).json({
      status: "success",
      data: { pedido: productosdelpedido.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//chapar fecha del pedido
router.route("/pedido_fecha/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const productosdelpedido = await pool.query("select fecha from tbl_pedido where id_pedido=$1; ", [id_pedido]);
    res.status(200).json({
      status: "success",
      data: { pedido: productosdelpedido.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});














module.exports = router;
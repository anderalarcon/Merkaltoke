const router = require("express").Router();
const pool = require("../database/keys");



//Create
router.route("/create").post(async (req, res) => {
  try {
    const { fecha } = req.body;
    const { estado } = req.body;
    const { total } = req.body;
    const { id_cliente } = req.body;
    const { id_metodo } = req.body;

    const newPedido = await pool.query(
      "INSERT INTO tbl_pedido(fecha,estado,total,id_cliente,id_metodo) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [fecha,estado,total,id_cliente,id_metodo]
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


//Update

/* router.route("/update/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha } = req.body;
    const { estado } = req.body;
    const { total } = req.body;
    const { id_cliente } = req.body;
    const { id_metodo } = req.body;
    const pedido = await pool.query(
      "UPDATE tbl_pedido SET FECHA=$1, ESTADO=$2, TOTAL=$3, ID_CLIENTE=$4, ID_METODO=$5 WHERE ID=$6 returning *",
      [fecha,estado,total,id_cliente,id_metodo,id]
    );
    res.status(200).json({
      status:"success",
      data:{pedido:pedido.rows[0]},

    });
  } catch (err) {
    console.error(err.message);
  }
}); */

//Delete

/* router.route("/delete/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const pedidooAeliminar = await pool.query("DElETE FROM tbl_pedido WHERE ID=$1", [
      id,
    ]);
    res.status(200).json("Area eliminada");
  } catch (err) {
    console.error(err.message);
  }
}); */


/* 
router.post("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT usuario_nickname FROM users WHERE id_cuenta_cliente = $1",
      [req.user.id] //al ser el token valido obtenemos el id
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}); */


module.exports = router;
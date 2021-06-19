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
      "INSERT INTO tbl_pedido(fecha,id_estado,total,id_cliente,id_metodo) VALUES(CURRENT_TIMESTAMP,$1,$2,$3,$4) RETURNING *",
      [1,total,id_cliente,id_metodo]
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
router.route("/get/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const pedido = await pool.query("SELECT * FROM tbl_pedido WHERE id_pedido=$1", [id_pedido]);
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
    const pedido = await pool.query("select p.id_pedido, p.fecha,p.id_estado,est.estado, p.total,p.id_cliente,p.id_metodo,m.metodo from tbl_pedido p , tbl_metodo_pago m,tbl_estado est where p.id_metodo=m.id_metodo_pago and p.id_estado=est.id_estado and id_cliente=$1; ", [id_cliente]);
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

// NUEVO 

router.route("/getpedido_proveedor/:id_proveedor").get(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const pedidosnuevos = await pool.query("select pe.id_pedido,pe.fecha,pe.estado,pe.total,prov.id_proveedor,prov.nombre_proveedor,c.nombre_cliente,c.direccion_cliente from tbl_pedido pe ,tbl_pedido_detalle pede,tbl_producto pro,proveedor prov,cliente c where pede.id_pedido=pe.id_pedido and pede.id_producto=pro.id_producto and prov.id_proveedor=pro.id_proveedor and prov.id_proveedor=$1 and c.id_cliente=pe.id_cliente  group by pe.id_pedido,prov.nombre_proveedor,prov.id_proveedor,c.direccion_cliente,c.nombre_cliente order by pe.id_pedido; ", [id_proveedor]);
    res.status(200).json({
      status: "success",
      data: { pedidos: pedidosnuevos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});


/* "select p.total,prov.nombre_proveedor, p.id_pedido,p.fecha,pe.id_producto,pro.nombre,pro.id_proveedor from tbl_pedido p  , tbl_pedido_detalle pe,tbl_producto pro, proveedor prov where pro.id_proveedor = prov.id_proveedor and p.id_pedido=pe.id_pedido and pe.id_producto=pro.id_producto and pro.id_proveedor=$1; */

router.route("/getpedido_productos/:id_pedido/:id_proveedor").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const { id_proveedor } = req.params;
    const pedidosproductos = await pool.query("select  pro.precio,pro.nombre,pe.cantidad from tbl_pedido p  , tbl_pedido_detalle pe,tbl_producto pro where p.id_pedido=pe.id_pedido and pe.id_producto=pro.id_producto and p.id_pedido=$1 and pro.id_proveedor=$2; ", [id_pedido,id_proveedor]);
    res.status(200).json({
      status: "success",
      data: { pedidos: pedidosproductos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});


//Eliminar productos de la factura al cancelar pedfido 
router.route("/cancelar/:id_pedido").delete(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const productoAeliminar = await pool.query(
      "DElETE FROM tbl_pedido_detalle WHERE id_pedido=$1",
      [id_pedido]
    );
    res.status(200).json("Pedido Cancelado");
  } catch (error) {
    res.status(500).json({
      message:
        "Ah ocurrido un error ",
      error,
    });
  }
});

router.route("/delete/:id_pedido").delete(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const productoAeliminar = await pool.query(
      "DElETE FROM tbl_pedido WHERE id_pedido=$1",
      [id_pedido]
    );
    res.status(200).json({
      message:'Pedido  Cancelado'
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Ah ocurrido un error ",
      error,
    });
  }
});


//Obtener productos y stock del pedido
router.route("/ProStock/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const productos = await pool.query("SELECT id_producto,cantidad FROM tbl_pedido_detalle WHERE id_pedido=$1", [id_pedido]);
    res.status(200).json({
      status: "success",
      data: { producto: productos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});



//Update stock de productos al cancelar pedido
router.route("/update/:id_producto/:cantidad").put(async (req, res) => {
  try {
    const {id_producto } = req.params;
    const { cantidad } = req.params;

    const carrito = await pool.query(
      "UPDATE tbl_producto SET stock=stock+$1 where id_producto=$2 returning *",
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
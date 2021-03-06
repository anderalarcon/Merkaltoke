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

//Crear devolver pedido
router.route("/create_Devolucion").post(async (req, res) => {
  try {
/*     const { fecha } = req.body;
    const { estado } = req.body; */
    const { motivo } = req.body;
    const { detalle_motivo } = req.body;
    const { id_pedido } = req.body;

    const newPedido = await pool.query(
      "INSERT INTO tbl_devolucion_pedido(motivo,detalle_motivo,fecha,procede,id_pedido) VALUES($1,$2,CURRENT_TIMESTAMP,'?',$3) RETURNING *",
      [motivo,detalle_motivo,id_pedido]
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


//GET2
router.route("/get2").get(async (req, res) => {
  try {
  
    const pedidos = await pool.query("SELECT p.id_pedido,p.fecha,c.nombre_cliente, p.total,e.estado,pa.metodo FROM tbl_pedido p, cliente c,tbl_estado e,tbl_metodo_pago pa WHERE p.id_cliente=c.id_cliente and e.id_estado=p.id_estado and p.id_metodo = pa.id_metodo_pago ");

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

//GetId
router.route("/getDev/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const pedido = await pool.query("SELECT * FROM tbl_devolucion_pedido WHERE id_pedido=$1", [id_pedido]);
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
    const pedido = await pool.query("select p.id_pedido, p.fecha,p.id_estado,est.estado, p.total,p.id_cliente,p.id_metodo,m.metodo from tbl_pedido p , tbl_metodo_pago m,tbl_estado est where p.id_metodo=m.id_metodo_pago and p.id_estado=est.id_estado and id_cliente=$1 and p.id_pedido not in (select p.id_pedido from tbl_pedido p,tbl_devolucion_pedido dev where dev.id_pedido=p.id_pedido and id_cliente=$1); ", [id_cliente]);
    res.status(200).json({
      status: "success",
      data: { pedido: pedido.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//GetId_cliente pedidos devueltos
router.route("/get_pedidos_devueltos_cliente/:id_cliente").get(async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const pedido = await pool.query("select dev.motivo, dev.detalle_motivo, dev.fecha as fechaDev, dev.procede, p.id_pedido, p.fecha as fechapedido,p.id_estado,est.estado, p.total,p.id_cliente,p.id_metodo,m.metodo from tbl_devolucion_pedido dev, tbl_pedido p , tbl_metodo_pago m,tbl_estado est where p.id_metodo=m.id_metodo_pago and dev.id_pedido = p.id_pedido and p.id_estado=est.id_estado  and id_cliente=$1; ", [id_cliente]);
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
    const pedidosnuevos = await pool.query("select pe.id_pedido,pe.fecha,est.id_estado,est.estado,pe.total,prov.id_proveedor,prov.nombre_proveedor,c.nombre_cliente,c.direccion_cliente from tbl_estado est,tbl_pedido pe ,tbl_pedido_detalle pede,tbl_producto pro,proveedor prov,cliente c where pede.id_pedido=pe.id_pedido and est.id_estado=pe.id_estado and pede.id_producto=pro.id_producto and prov.id_proveedor=pro.id_proveedor and prov.id_proveedor=$1 and c.id_cliente=pe.id_cliente  group by est.id_estado,pe.id_pedido,prov.nombre_proveedor,prov.id_proveedor,c.direccion_cliente,c.nombre_cliente order by pe.id_pedido; ", [id_proveedor]);
    res.status(200).json({
      status: "success",
      data: { pedidos: pedidosnuevos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//get pedidos para devolucion
router.route("/getpedido_prov_devolucion/:id_proveedor").get(async (req, res) => {
  try {
    const { id_proveedor } = req.params;
    const pedidosnuevos = await pool.query("SELECT distinct(dev.id_pedido), dev.motivo, dev.detalle_motivo,dev.fecha, dev.procede FROM tbl_devolucion_pedido dev, proveedor prov, tbl_producto prod, tbl_pedido pedi, tbl_pedido_detalle pedd WHERE dev.id_pedido=pedi.id_pedido AND pedi.id_pedido= pedd.id_pedido AND pedd.id_producto=prod.id_producto AND prod.id_proveedor = prov.id_proveedor AND prov.id_proveedor =$1 ORDER BY dev.fecha ASC; ", [id_proveedor]);
    res.status(200).json({
      status: "success",
      data: { pedidos: pedidosnuevos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//get devolucion datos del pedido
router.route("/getpedido_dev/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const Devol = await pool.query("SELECT distinct(id_pedido), motivo, detalle_motivo,fecha, procede FROM tbl_devolucion_pedido WHERE id_pedido = $1; ", [id_pedido]);
    res.status(200).json({
      status: "success",
      data: { pedidos: Devol.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//get count devolucion datos del pedido
router.route("/getpedido_dev_count/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const Devol = await pool.query("SELECT count(id_pedido)FROM tbl_devolucion_pedido WHERE id_pedido = $1; ", [id_pedido]);
    res.status(200).json({
      status: "success",
      data: { pedidos: Devol.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//actualizar procede de devolucion
router.route("/updateDev/:id_pedido/:procede").put(async (req, res) => {
  try {
    const {id_pedido } = req.params;
    const { procede } = req.params;

    const carrito = await pool.query(
      "UPDATE tbl_devolucion_pedido SET procede=$1 where id_pedido=$2 returning *",
      [procede,id_pedido]
    );
    res.status(200).json({
      status:"success",
      data:{carrito:carrito.rows[0]},

    });
  } catch (err) {
    console.error(err.message);
  }
});

/*select pe.id_pedido,pe.fecha,pe.estado,pe.total,prov.id_proveedor,prov.nombre_proveedor,c.nombre_cliente,c.direccion_cliente from tbl_pedido pe ,tbl_pedido_detalle pede,tbl_producto pro,proveedor prov,cliente c where pede.id_pedido=pe.id_pedido and pede.id_producto=pro.id_producto and prov.id_proveedor=pro.id_proveedor and prov.id_proveedor=$1 and c.id_cliente=pe.id_cliente  group by pe.id_pedido,prov.nombre_proveedor,prov.id_proveedor,c.direccion_cliente,c.nombre_cliente order by pe.id_pedido; */
/* "select p.total,prov.nombre_proveedor, p.id_pedido,p.fecha,pe.id_producto,pro.nombre,pro.id_proveedor from tbl_pedido p  , tbl_pedido_detalle pe,tbl_producto pro, proveedor prov where pro.id_proveedor = prov.id_proveedor and p.id_pedido=pe.id_pedido and pe.id_producto=pro.id_producto and pro.id_proveedor=$1; */
/*select c.nombre_cliente,c.direccion_cliente,est.id_estado,est.estado, p.total,prov.nombre_proveedor, p.id_pedido,p.fecha,pe.id_producto,pro.nombre,pro.id_proveedor from cliente c,tbl_estado est,tbl_pedido p  , tbl_pedido_detalle pe,tbl_producto pro, proveedor prov where c.id_cliente=p.id_cliente and est.id_estado=p.id_estado and pro.id_proveedor = prov.id_proveedor and p.id_pedido=pe.id_pedido and pe.id_producto=pro.id_producto and pro.id_proveedor=$1; */

//ete

router.route("/getpedido_productos/:id_pedido/:id_proveedor").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const { id_proveedor } = req.params;
    const pedidosproductos = await pool.query("select  pe.precio,pro.nombre,pe.cantidad from tbl_pedido p  , tbl_pedido_detalle pe,tbl_producto pro where p.id_pedido=pe.id_pedido and pe.id_producto=pro.id_producto and p.id_pedido=$1 and pro.id_proveedor=$2; ", [id_pedido,id_proveedor]);
    res.status(200).json({
      status: "success",
      data: { pedidos: pedidosproductos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});
router.route("/getpedido_productos2v2/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const pedidosproductos = await pool.query("select  pe.precio,pro.nombre,pe.cantidad from tbl_pedido p  , tbl_pedido_detalle pe,tbl_producto pro where p.id_pedido=pe.id_pedido and pe.id_producto=pro.id_producto and p.id_pedido=$1; ", [id_pedido]);
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


//CHAPAR EL ID_ESTADO
router.route("/getestado/:id_estado/:id_pedido").get(async (req, res)  =>{
  try{
    const {id_estado} = req.params;
    const {id_pedido} = req.params;
    const estadopedido = await pool.query(
      "SELECT est.estado, p.id_estado,p.id_pedido from tbl_estado est, tbl_pedido p WHERE est.id_estado = p.id_estado and p.id_estado =$1 and p.id_pedido=$2", 
      [id_estado,id_pedido]
    );
    res.status(200).json({
      status:"success",
      data:{estado:estadopedido.rows},

    });
  }catch (err) {
    console.error(err.message);
  }

});

//GetestadobyidDevolucion
router.route("/getestDev/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const pedidoestado = await pool.query(
      "select p.id_pedido, dev.procede from tbl_pedido p , tbl_devolucion_pedido dev where dev.id_pedido=p.id_pedido and  p.id_pedido=$1;",
      [id_pedido]
    );
    res.status(200).json({
      status: "success",
      data: { pedidoestado: pedidoestado.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//Getestadobyid
router.route("/getest/:id_pedido").get(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const pedidoestado = await pool.query(
      "select p.id_pedido, g.id_estado, g.estado from tbl_pedido p , tbl_estado g where p.id_estado=g.id_estado and  id_pedido=$1;",
      [id_pedido]
    );
    res.status(200).json({
      status: "success",
      data: { pedidoestado: pedidoestado.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//Updatestado
router.route("/update/:id_pedido").put(async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const { id_estado } = req.body;
    const pedido = await pool.query(
      "UPDATE tbl_pedido SET ID_ESTADO=$1 WHERE ID_PEDIDO=$2 returning *",
      [id_estado, id_pedido]
    );
    res.status(200).json({
      status: "success",
      data: { pedido: pedido.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
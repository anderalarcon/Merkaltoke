const router = require("express").Router();
const pool = require("../database/keys");





//GET
router.route("/get").get(async (req, res) => {
  try {
  
    const categorias = await pool.query("SELECT * FROM tbl_categoria");

    res.status(200).json({
      status: "success",
      results: categorias.rows.length,
      data: { categorias: categorias.rows },
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

router.route("/getProductos-Categoria/:id_categoria").get(async (req, res) => { //perspectiva cliente
    try {
      const { id_categoria } = req.params;
      const categoria = await pool.query("select p.visible, p.img_producto, pro.nombre_proveedor ,cat.categoria, p.id_producto,p.nombre,p.precio,p.stock,p.detalle,p.id_proveedor,p.id_categoria from tbl_producto p ,tbl_categoria cat,proveedor pro  where p.id_categoria=cat.id_categoria and pro.id_proveedor=p.id_proveedor and  p.id_categoria=$1 and p.visible='si' ", [id_categoria]);
      res.status(200).json({
        status: "success",
        data: { productos: categoria.rows },
      });
    } catch (err) {
      console.error(err.message);
    }
  });

/*   router.route("/getProductos-Categoria2/:id_categoria").get(async (req, res) => { //perspectiva proveedor
    try {
      const { id_categoria } = req.params;
      const categoria = await pool.query("select p.visible, p.img_producto, pro.nombre_proveedor ,cat.categoria, p.id_producto,p.nombre,p.precio,p.stock,p.detalle,p.id_proveedor,p.id_categoria from tbl_producto p ,tbl_categoria cat,proveedor pro  where p.id_categoria=cat.id_categoria and pro.id_proveedor=p.id_proveedor and  p.id_categoria=$1 ", [id_categoria]);
      res.status(200).json({
        status: "success",
        data: { productos: categoria.rows },
      });
    } catch (err) {
      console.error(err.message);
    }
  }); */



module.exports = router;


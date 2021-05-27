const router = require("express").Router();
const pool = require("../database/keys");





//GET
router.route("/get").get(async (req, res) => {
  try {
  
    const metodos = await pool.query("SELECT * FROM tbl_metodo_pago");

    res.status(200).json({
      status: "success",
      results: metodos.rows.length,
      data: { metodos: metodos.rows },
    });
  } catch (err) {
    console.error(err.message);
  }
});





module.exports = router;


const router = require("express").Router();
const pool = require("../database/keys");


//GET
router.route("/get").get(async (req, res) => {
    try {
    
      const estados = await pool.query("SELECT * FROM tbl_estado");
  
      res.status(200).json({
        status: "success",
        results: estados.rows.length,
        data: { estados: estados.rows },
      });
    } catch (err) {
      console.error(err.message);
    }
  });

  module.exports = router;

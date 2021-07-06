const router = require("express").Router();
const pool = require("../database/keys");

const path = require('path');
const fs = require('fs');
const mime = require('mime-types');

//GetId
router.route("/get/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const administrador = await pool.query(
      "SELECT * FROM admin WHERE id=$1",
      [id]
    );
    res.status(200).json({
      status: "success",
      data: { administrador: administrador.rows[0] },
    });
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
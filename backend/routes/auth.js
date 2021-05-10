import express from "express";

import aunthentication from"../controllers/auth"

const router = express.Router();

router.post("/signup", aunthentication.signUp)
router.post('/signin',aunthentication.signIn)

module.exports=router;
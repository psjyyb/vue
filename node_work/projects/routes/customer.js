const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("customer get")
})
router.post("/",(req,res)=>{
    res.send("customer insert")
})
router.put("/",(req,res)=>{
    res.send("customer update")
})
router.delete("/",(req,res)=>{
    res.send("customer delete")
})
module.exports = router;
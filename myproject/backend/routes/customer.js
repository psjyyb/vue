const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');

router.get("/",(req,res)=>{
    query("customerList")
    .then(result=> res.send(result)
    )
})
router.post("/",(req,res)=>{
    query("customerInsert",req.body)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})
router.put("/:id", async (req,res)=>{
   let result = await query("customerUpdate",req.body.data)
    res.send(result);
})
router.delete("/:id",(req,res)=>{
    query("customerDelete",req.params.id)
    .then(result=>res.send(result))
})
module.exports = router; 
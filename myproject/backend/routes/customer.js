const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');
router.get("/:id",(req,res)=>{
    query("customerInfo",Number(req.params.id))
    .then(result=> res.send(result)
    )
})
router.get("/",(req,res)=>{
    let p =Number(req.query.page);
    let page = (p-1)*10;
    query("customerList",page)
    .then(result=> res.send(result)
    )
})

router.post("/",(req,res)=>{
    query("customerInsert",req.body)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})
router.put("/:id", async (req,res)=>{
    let result = await query("customerUpdate",[req.body,Number(req.params.id)])
    res.send(result);
})
router.delete("/:id",(req,res)=>{
    query("customerDelete",req.params.id)
    .then(result=>res.send(result))
})
module.exports = router; 
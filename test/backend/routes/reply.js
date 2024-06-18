const express = require('express');
const router = express.Router();
const path = require('path');
const query = require('../mysql/index.js');

router.get("/:bno",(req,res)=>{
    query("replyList",req.params.bno)
    .then(result => res.send(result))
    .catch(err=>console.log(err))
})
router.delete("/:no",(req,res)=>{
    query("reqlyDelete",Number(req.params.no))
    .then(result => res.send(result))
    .catch(err=>console.log(err))
})
router.post("/",(req,res)=>{
    console.log(req.body)
    query("replyInsert",[req.body.writer,req.body.content,Number(req.body.bno)])
    .then(result => res.send(result))
    .catch(err=>console.log(err))
})
module.exports = router;
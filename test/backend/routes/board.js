const express = require('express');
const router = express.Router();
const path = require('path');
const query = require('../mysql/index.js');

router.get("/",(req,res)=>{
    query("boardList")
    .then(result => res.send(result))
    .catch(err=>console.log(err))
})

router.get("/:no",(req,res)=>{
    query("boardInfo",req.params.no)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})

router.delete("/:no",(req,res)=>{
    query("boardDelete",req.params.no)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})

router.put("/:no",(req,res)=>{
    query("boardUpdate",[req.body,req.params.no])
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})
router.post("/",(req,res)=>{
    query("boardInsert",req.body)
    .then(result=>{console.log(req.body),res.send(result)})
    .catch(err=>console.log(err))
})
module.exports = router;
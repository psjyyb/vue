const express = require('express');
const router = express.Router();
const path = require('path');
const query = require('../mysql/index.js');
var format = require('date-format');
const moment = require("moment");

router.get("/",(req,res)=>{
    query("boardList")
    .then(result => {
        // let date = moment(result.created_date)
        // result.created_date=date.format("YYYY-MM-DD");
        res.send(result),
        console.log(result)})
    .catch(err=>console.log(err))
})

router.get("/:no", async (req,res)=>{
   query("boardInfo",req.params.no)
   .then(result=>{  
    // let date = moment(result.created_date)
    // result.created_date=date.format("YYYY-MM-DD");
    res.send(result)
    console.log(result)
})
   .catch(err=>console.log(err))
})

router.delete("/:no",(req,res)=>{
    query("boardDelete",req.params.no)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})

router.put("/:no",(req,res)=>{
    query("boardUpdate",[req.body.title,req.body.content,req.body.no])
    .then(result=>{res.send(result),console.log('tnwjd??')})
    .catch(err=>console.log(err))
})
router.post("/",(req,res)=>{
    query("boardInsert",req.body)
    .then(result=>{console.log(req.body),res.send(result)})
    .catch(err=>console.log(err))
})
module.exports = router;
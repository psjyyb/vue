const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');

router.get("/",(req,res)=>{
    let p =Number(req.query.page);
    let page = (p-1)*3;
    query("todoList",page)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})  
router.get("/:no",(req,res)=>{
  let result =query("todoInfo",req.params.no)
  .then(result=>res.send(result))
})
router.post("/",(req,res)=>{
    query("todoInsert",req.body)
    .then(result=>res.send(result))
})
router.put("/:no",(req,res)=>{
  query("todoUpdate",[req.body,req.params.no])
  .then(result=> res.send(result))
})
router.delete("/:no",(req,res)=>{
  query("todoDelete",req.params.no)
  .then(result=>res.send(result))
})
module.exports = router;
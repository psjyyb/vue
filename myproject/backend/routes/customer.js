const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');

router.get("/", async(req,res)=>{
   let page = Number(req.query.page);
   let pageUnit =Number(req.query.pageUnit);

   if(!page){page = 1; }
   if(!pageUnit){ pageUnit = 5; }
    
   let offset = (page-1)*pageUnit;
   let list = await query("customerList",[offset,pageUnit]);
   let count = await query("customerCount");
   count = count[0].cnt;
   res.send({list,count})
})
router.get("/:id",(req,res)=>{
    query("customerInfo",Number(req.params.id))
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
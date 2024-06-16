const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');

// router.get("/:no",(req, res)=>{
//   console.log('여기왓아')
//     query("ReplyView",Number(req.params.no))
//     .then(result=>res.send(result))
//   })

  router.get("/", async(req,res)=>{
    let page = Number(req.query.page);
    let pageUnit =Number(req.query.pageUnit);
  
    if(!page){page = 1; }
    if(!pageUnit){ pageUnit = 5; }
     console.log('여기들엉옴')
    let offset = (page-1)*pageUnit;
    let list = await query("ReplyView",[Number(req.query.boardno),offset,pageUnit]);
    let count = await query("ReplyCount");
    count = count[0].cnt;
    res.send({list,count})
  })
router.post("/",(req,res)=>{
  console.log(req.body)
  query("ReplyInsert",req.body)
  .then(result=>res.send(result))
})
router.delete("/:no",(req,res)=>{
  query("ReplyDelete",req.params.no)
  .then(result=>res.send(result))
})
module.exports = router;
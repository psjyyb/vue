const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');
const multer =require('multer');
const upload = (multer({dest:'d:/upload/'}))

router.get("/",(req,res)=>{
    let p =Number(req.query.page);
    let page = (p-1)*3;
    query("boardList",page)
    .then(result=>res.send(result))
    .catch(err=>console.log(err))
})  
router.get("/:no",(req,res)=>{
  let result =query("boardInfo",req.params.no)
  .then(result=>res.send(result))
})
router.post("/",upload.single('avatar'),(req,res)=>{
  let data = {...req.body};
  if(req.file!=null){
    data.filename = req.file.originalname;
    data.uploadfilename = req.file.filename;
  }
    query("boardInsert",data)
    .then(result => res.send(result))
  });

router.put("/:no",(req,res)=>{
  query("boardUpdate",[req.body,req.params.no])
  .then(result=> res.send(result))
})
router.delete("/:no",(req,res)=>{
  query("boardDelete",req.params.no)
  .then(result=>res.send(result))
})

module.exports = router;
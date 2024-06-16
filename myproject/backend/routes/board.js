const express = require('express');
const router = express.Router();
var path = require('path');
const query = require('../mysql/index.js');
const multer =require('multer');
const upload = (multer({dest:'d:/upload/'}))

router.get("/", async(req,res)=>{
  let page = Number(req.query.page);
  let pageUnit =Number(req.query.pageUnit);

  if(!page){page = 1; }
  if(!pageUnit){ pageUnit = 5; }
   
  let offset = (page-1)*pageUnit;
  let list = await query("boardList",[offset,pageUnit]);
  let count = await query("boardCount");
  count = count[0].cnt;
  res.send({list,count})
})
router.get("/:no",(req,res)=>{
  query("boardInfo",req.params.no)
  .then(result=>{res.send(result)
  })
    //  .then(results=>
  //    img= result.uploadfilename,
  //    filepath = `D:/upload/${img}`,
  // //   //filename= result.filename,
  // //   //res.setHeader('Content-Disposition', `attachment; filename=${filename}`),
  //    res.sendFile(filepath)
  //  )
  // 상세조회 이미지 추가
  // const filepath = 'D:/upload/0750864fcbca03d48ca9e3958c689330';  
  //res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
  //res.sendFile(filepath);
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
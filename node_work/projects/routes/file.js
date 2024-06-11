const express = require('express');
const router = express.Router();
const multer =require('multer');
const upload = (multer({dest:'d:/upload/'}))

router.post('/upload',upload.array('avatar',10),(req,res,next)=>{
   //console.log(req.file);
   console.log('파일명',req.files[0].originalname);
   console.log('파일크기',req.files[0].size);
   console.log('저장된 파일명',req.files[0].filename);
   console.log(req.body);
   res.send("ok");
});

module.exports = router;
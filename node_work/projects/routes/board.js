const express = require('express');
const router = express.Router();

board = [{
    "no":1,
    "title": "titit",
    "writer": "wriwri",
    "content": "concon"
  },
  {
    "no":2,
    "title": "pqpqp",
    "writer": "vpvp",
    "content": "sososo"
  }
];

  router.get("/:no",(req,res)=>{
    //console.log('no:',req.params.no)
    let result = board.filter(a=>
        a.no==req.params.no
    )
    res.send(result);
})
router.get("/",(req,res)=>{
    console.log(new Date(req.requestTime).toLocaleString());
    res.send(board);
})
router.post("/",(req,res)=>{
    board.push(req.body)
    res.send("board insert 라우트");
})
router.put("/:no",(req,res)=>{
   board = board.map(a=> a.no ==req.params.no?{...a,...req.body}:obj )
    res.send(board);
})
router.delete("/:no",(req,res)=>{
    //indexOf -> splite
    //board = board.filter
    board = board.filter(a => a.no!= req.params.no)
    res.send(board);
})
module.exports = router;
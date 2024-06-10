let url = 'http://localhost:3000/posts';
const axios = require('axios');

let data = {"id":"6","title":"modifytest6"};

axiosdelete();  //호이스팅(끌어올리기)

// axios delete
function axiosdelete(){
    axios.delete(url+"/6")
    .then(json => console.log(json.data))
}

// fetch delete
function fetchdelete(){
    fetch(url+"/7",{
        method:"delete",
    })
    .then(response=> response.json())
    .then(json => console.log(json))
    .catch(err=>console.log(err))
}

// axios put
function axiosput(){
    axios.put(url+"/6",data)
    .then(json => console.log(json.data))
}

// fetch put
function fetchput(){
fetch(url+"/7",{
    method:"put",
    headers:{"content-type":"application/json; charset=UTF-8"},
    body:JSON.stringify(data)
})  
.then(response=> response.json())
.then(json => console.log(json))
.catch(err=>console.log(err))
}


// axios post
function axiospost(){
axios.post(url,data)
.then(json => console.log(json.data))
}


// fetch post
function fetchpost(){
    fetch(url,{
        method:"post",
        headers:{"content-type":"application/json; charset=UTF-8"},
        body:JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(json => console.log(json))
    .catch(err=>console.log(err))
}

// fetch get   
function fetchget(){
    fetch(url)
    .then(response=> response.json())
    .then(json => console.log(json))
}

// axios get
//import axios from "axios"
function axiosget(){
    axios.get(url)
    .then(response=>console.log(response.data))
}

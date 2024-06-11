/*   array_map.js
 *  map 은 원본함수를 바꾸지 않는다
 */

let arr = [1,2,3];
let result = arr.map((a)=>a*a);
console.log(result);

let userArr =[
    {userId:1 ,score:60},
    {userId:2 ,score:50},
    {userId:3 ,score:70},
    {userId:4 ,score:40},
];
let newArr = userArr.map(a => {if(a.score>=60) return {...a,grade:true}; 
                                else return {...a,grade:false};
                            })  
console.log('newArr',newArr);
console.log('userArr',userArr);
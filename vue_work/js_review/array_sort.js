/** array_sort.js
 * 
 */
let fruits = ['Banana','오렌지','사과','Mango'];
//fruits.sort((a,b)=> b.length - a.length );
fruits.sort((a,b)=>{
     if(a > b) return -1;
     else if(a==b)return 0;
     else return 1;
        
     
})
console.log(fruits);

//객체배열 정렬
let arrEmp =[
    { empName:'scott',dept:'개발', hireDate:'2019-11-01',score:90},
    { empName:'hon',dept:'기획', hireDate:'2018-11-01',score: 95},
    { empName:'choi',dept:'총무', hireDate:'2017-11-01',score:100}
    ]

    //이름(문자)
    arrEmp.sort((a,b)=>{
        if( a.empName>b.empName) return 1;
        else if (a.empName==b.empName) return 0;
        else return -1;
    });
    console.log(arrEmp);

    //이름길이
    arrEmp.sort((a,b)=> a.empName.length - b.empName.length);
    console.log(arrEmp);

    //score(숫자) : 내림차순(sort는 원본함수를 바꿈)
    arrEmp.sort((a,b)=>b.score - a.score);
    console.log('성적순',arrEmp);

    // 필터(조건에 맞는 여러개를 찾아냄 ,원본함수를 바꾸지않음)
    let result = arrEmp.filter( emp => emp.score>=95);
    console.log('개발부서',result);
    //파인드 (조건에 맞는 한개를 찾아냄 ,원본함수를 바꾸지않음)
    let result1 = arrEmp.find( emp => emp.score>=95);
    console.log('개발부서',result1);

    //map(원본함수를 바꾸지 않음)

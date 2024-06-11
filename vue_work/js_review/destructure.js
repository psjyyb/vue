/** destructure.js
 *  구조분해 
 */
// 객체 구조분해
let emp = { empName:'scott',dept:'개발', hireDate:'2019-11-01'};
//let empName = emp.empName;
let { empName,dept } = emp;
console.log(empName,dept);

//객체 복사(얕은복사,깊은복사)
//(얕은복사 - 객체가 참조하고있는 주소를 복사 받아서 변하면 같이 변한다)
let emp1 = emp;
//(깊은복사 - 객체 자체를 복사해서 새로운 주소를 참조)
let emp2 = {};
emp2={...emp,dt:'2015'}; 
console.log('2131',emp1);
emp.empName='kim';
console.log(emp1);
console.log(emp2);

// 배열 구조분해
let arr =['a','b','c'];
let [first, second] = arr;
console.log(first,second); // arr[0], arr[1]
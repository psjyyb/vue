//import process from 'process'; 사용하기위해선 package.json 에 type:module 추가 해줘야됨
const process = require('process');
const os = require('os');
//프로세스 이벤트

process.on('beforeExit',(code)=>{
    console.log('2. 종료 직전 ',code);
})
process.on('exit',(code)=>{
    console.log('3. 종료 될때 ',code);
})
//process.exit();
console.log('1. 첫번째 메시지');
//console.log(process.env);

console.log('hostname',os.hostname);
console.log('type', os.type);
console.log('homedir',os.homedir);
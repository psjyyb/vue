// 비밀번호 암호화
const crypto = require('crypto');
const { resolve } = require('path');

const createSalt = ()=>{
return new Promise((resolve,reject)=>{
    crypto.randomBytes(64,(err,buf)=>{
        if(err) reject(err);
        resolve(buf.toString('base64'));
    })
});
}
const createCryptoPassword = async(plainPassword)=>{
    const salt = await createSalt();
    return new Promise((resolve,reject)=>{
        crypto.pbkdf2(plainPassword,salt,9999,64,"sha512",(err,key)=>{
            if(err) reject(err);
            resolve({password:key.toString("base64"),salt});
        })
    })
}
createCryptoPassword('skdsae1231')
.then(result=>console.log(result))
const pw = crypto.createHash('sha512').update('pw1234').digest('base64');
//console.log(pw);
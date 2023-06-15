// 비동기처리 : async
// try{}catch()finally{}

const fs = require('fs');
const fsPromises = require('fs').promises; // 비동기처리하는 파일 모듈
const path = require('path');

const fileOptions = async()=>{
    try{
        const data = await fsPromises.readFile('./datas/lorem.txt', "utf-8")
        console.log("1. readfile", data);
        console.log("2. console.log");
    }catch(err){
        // err 처리
        console.log(err);
    }finally{
        // 생략 가능
        // try 코드가 실행돼도, catch 구문이 실행돼도 실행
        console.log("finally 반드시 실행");
        // db.close
    }
}

fileOptions();
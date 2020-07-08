import Mock from 'mockjs'
import viewinfolist from './data/getviewinfolist.json'
import soundlist from './data/getsoundlist.json'
// const fs = require('fs');
// function getviewinfolist(param){
//     console.log(param);
//     let data = fs.readFile("mock/data/getviewinfolist.json");
//     console.log(data);
//     return data;
// }


Mock.mock('getviewinfolist','get',()=>{return viewinfolist;});
Mock.mock('getsoundlist','get',()=>{return soundlist;});

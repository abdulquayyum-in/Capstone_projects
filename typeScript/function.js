"use strict";
// function addtwo(a:number):string{
//     return  "a+2"
// }
// console.log(addtwo(22));
Object.defineProperty(exports, "__esModule", { value: true });
// function loginuser(name:string,email:string,ispaid:boolean = false) {
// }
// loginuser("quayyum","ehegh")
function consoleerror(errmsg) {
    console.log(errmsg);
}
function handleerorr(errmsg) {
   try {
    console.log("hey")
    throw errmsg
   } catch (error) {
    console.log(error)
   }
}
handleerorr("123");

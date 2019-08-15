//  let obj=  {
//      a:{
//          b:{
//              c:hello
//          }
//      }
//  }

//  (function(newVar){
//      console.log(newVar)
//  }(obj.a.b.c))

//the this keyword 

// var obj ={
//     val:"collins kesuibai",
//     naming :function(){
//         console.log(this.val);
//     }
// };
// var obj2 ={
//  val :"collins kiprop"
// };

// obj2.naming = obj.naming;

// obj.naming();

// var print = obj.naming.bind(obj2);
// print(); //collins kiprop


// function asyncMethod (message ,num){
// return new Promise(function (resolve,reject){
//     setTimeout (function (){
//         console.log(message +' ' + num);
//         resolve(num +1);
//     },500);
// })
// }

// async function main(){
//     var one = await asyncMethod('collins is cool',0);
//     var two = await asyncMethod("collins two",one);
//     var three = await asyncMethod("validate user ",two);
//     var four = await asyncMethod("collins three",three);

// }
// main();
function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }
  /* 
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg(); // 🤡 lurks in the shadows <-- after 1 second */
//using all it waits for all functions to take place 
//   async function msg() {
//     const [a, b, c] = await Promise.all([who(), what(), where()]);
  
//     console.log(`${ a } ${ b } ${ c }`);
//   }
//   msg();
  
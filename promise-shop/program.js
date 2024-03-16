//EXCERCISE 1
// setTimeout(()=>{
//   console.log("TIMED OUT!")
// },300)


//EXCERCISE 2
// require('es6-promise');
// 'use strict';

//     var promise = new Promise(function (fulfill, reject) {
//       // Your solution here
//       setTimeout(()=>{fulfill("FULFILLED!");},300);
//     });
      
//     promise.then((value)=>{
//       console.log(value);


//     })
    // Your solution here
  
    // //EXCERCISE 3
    // var promise = new Promise(function (fulfill, reject) {
    //   // Your solution here
    //    setTimeout(()=>{
    //    reject(new Error("REJECTED!"));
    //    },300); 
    // });

    // function onReject (error) {
    //   // Your solution here
    //  console.log(error.message);
    // }
    // promise.then(val=>console.log(val),(error=>onReject(error)))
    // // Your solution here


    //Excercise 4 (Promise resolves only once)

    // let promise=new Promise((fulfilled,rejected)=>{
    //   fulfilled('I FIRED');
    //   rejected(new Error('I DID NOT FIRE.'));

    // })

    // function onRejected(error)
    // {
    //   console.log(error.message);
    // }

    // promise
    // .then(val=>console.log(val),onRejected);

    //Excercise 5 
   
//Promises are reslved asynchronously

//  let promise=new Promise((fulfil,reject)=>{
//   fulfil("PROMISE VALUE");
//   console.log("MAIN PROGRAM");
 
//  })

//  promise.then(x=>console.log(x));
 
 //EXcercise-6

// let promise1= Promise.resolve("I am God!")

// let promise2=Promise.reject(new Error('I am the devil'));

// let promise3=new Promise((fulfil,reject)=>{
//   reject(new Error('Osho'));
// })

// promise3.catch(err=>console.log(err.message))


//Excercise-7

//Promise followed by Promises.

//abhi tak tumhare handlers then catch bas print kar rahi thi values /errors, kya karoge agar then/catch ko kuch asynchronous karna ho.

first().then(x=>second(x).then(x=>console.log(x)));

//second().then(x=>x)

//promise2.then(x=>console.log(x));



// let promise=new Promise((resolve,reject)=>{
//   resolve(Promise.resolve("3"));
//   reject(new Error("4"));
// })

// console.log(promise.then(x=>console.log(x)));
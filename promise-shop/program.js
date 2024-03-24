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

//first().then(x=>second(x).then(x=>console.log(x)));

//second().then(x=>x)

//promise2.then(x=>console.log(x));



// let promise=new Promise((resolve,reject)=>{
//   resolve(Promise.resolve("3"));
//   reject(new Error("4"));
// })

// console.log(promise.then(x=>console.log(x)));

//excercise 8/13

//do i have to return promises?

//.then handle karega ye sab, promise ki library wrap kar degi return value in a promise agar jarurat hogi.

// ye mast batt hai kyunki tumhe ghanta nhi matlab prmise . then de rsha ya value toh tum mast .then().then ki chain banao bina ye soche ki kon value de raha kon promise.

// The key thing to understand here is that your handlers will wrap your
// return values in promises even if they are obtained synchronously.

// Another very important point to understand is that, as discussed before, the
// returned value will resolve on the next turn of the event loop.

// ## Task

// Construct a promise chain that returns values to prove to yourself that
// promise handlers will wrap your returned values in promises allowing
// additional chaining.

// function attachTitle(x){
//   return `DR. ${x}`
// }
// Promise.resolve('MANHATTAN')
// .then(attachTitle)
// .then(console.log);

//EXcercise 9/13

//kya hota hai jab ek error feka jata hai

// function parsePromised(data){

// return new Promise((fulfil,reject)=>{
//     try{
//         fulfil(JSON.parse(data));
//         throw reject(new Error("not parsed"));
//     }catch(e){
//         console.log(e.message);
//     }
// })


// }

// parsePromised(process.argv[2])


//Excercise 10/13


// function alwaysThrows(){
//     try{
//         throw Promise.reject(new Error("OH NOES"));
//     }catch(e){
//       return e;
//     }
   
// }
// //alwaysThrows().then(null,e=>console.log(e.message));





// let iterate=(x)=>{
//     console.log(x);
//     return ++x;
// };

// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .catch(alwaysThrows().catch(e=>console.log(e.message)))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)


// let alwaysThrows=()=>
//   {
//    return new Promise((fulfil,reject)=>
//     {
//     reject(new Error("OH NOES"));
//     }
//     );
//   }
//   let onReject=(e)=>{
//     console.log(e.message)
//   }

// let iterate=(x)=>{
//     console.log(x);
//     return x+1;
// }

// Promise.resolve(iterate(1))
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)


// function iterate(num) {
//     console.log(num);
//     return num + 1;
//   }

//   function alwaysThrows() {
//     throw new Error('OH NOES');
//   }

//   function onReject(error) {
//     console.log(error.message);
//   }

//   Promise.resolve(iterate(1))
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(onReject);


//Excercise 11/13

// Let’s build this function!

// Create a function all that accepts two promises as arguments. This all
// function should do all of the following:



  //   function all(promise1,promise2){
  //     let promise3=()=>{
  //       return new Promise((resolve,reject)=>{
  //       let counter=0;
  //       let val1=promise1().then(counter++);
  //       let val2=promise2().then(counter++);
  //       if(counter==2){
  //         resolve([val1,val2]);
  //       }
  //     });}
  //   return promise3();
  //   }
   
  // all(getPromise1,getPromise2).then(v=>{
  //   let ans=[];
  //   function onFulfil(x){
  //      ans.push(x);
  //      if(ans.length==2)
  //      console.log(ans);
  //   }
  //   v.forEach(item=>item.then(x=>onFulfil(x)))
  //  // console.log(ans);
  // })

// Create an internal promise in whatever way you see fit.

// Create a counter variable with initial value of 0.

// Attach then fulfillment handlers to both promises and increment the internal
// counter when the handlers are called.

// When the counter reaches 2, fulfill the internal promise with an array
// containing both values.

// Finally return that internal promise to the user.

// After you finish writing your all function, pass getPromise1() and
// getPromise2() into your new function and then attach console.log as a
// fulfillment handler to the promise returned by your function. These two
// promise-returning functions will be provided to you in the global scope.



//excercise -12


var HTTP = require("q-io/http");

HTTP.read('http://localhost:1337').then(json=>JSON.parse(json)).then(val=>console.log(val)).catch(err=>console.log(err));
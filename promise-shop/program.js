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

function parsePromised(data){

return new Promise((fulfil,reject)=>{
    try{
        fulfil(JSON.parse(data));
        throw reject(new Error("not parsed"));
    }catch(e){
        console.log(e.message);
    }
})


}

parsePromised(process.argv[2])

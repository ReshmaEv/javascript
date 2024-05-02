







// function result(a){
//     console.log(a);
// }


// add(1,2,result)


// const side = [1,2,3,4];

// const area = function (side){
//     return side*side;
// }

// const perimeter = function(side){
//     return 4*side;
// }


// const calculate = function(side,logic){
//     const output =[];
//     for (i=0;i<side.length;i++){
//         output.push(logic(side[i]))
//     }
//     return output;
// }


// console.log(calculate(side,area));
// console.log(calculate(side,perimeter));


// console.log("b");

// setTimeout(()=>{
//     console.log("agsjdghh");
// },2000)
// console.log("c");
// console.log("vvmv");


// let promise1= new Promise(function(resolve,reject){

//     setTimeout(() => resolve("done"),1000);
// });

// promise1.then(
//     result => console.log(result)
    
//   );

// let promise2 = new Promise(function(resolve,reject){

    
//     reject ("woops!")
// })
// promise2.then(
// ).catch((e)=>{
//     console.log(e);
// })



let a = "https://jsonplaceholder.typicode.com/users"


// let fetchdata = async() =>{

//     let response = await fetch(a)
//     let data = response.json()
//     .then ((data)=>console.log(data))


// }


// fetchdata()


let fetchdata = async() =>{

    let response = await fetch(a)
   console.log(response);

   



}


fetchdata()


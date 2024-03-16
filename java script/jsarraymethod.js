// let  arr=[1,2,3,4,5];
// // let print=function(el){
// //     console.log(el);
// // };

//forEach method
// // arr.forEach(print) 
// arr.forEach(function(el) {
//     console.log(el);
// });

// let arr=[{
//     name:"aman",
//     marks:95,
// },
// {
//     name:"shradha",
//     marks:85,  
// },
// {
//     name:"karan",
//     marks:65,
// }];

// arr.forEach((student)=>{
//     console.log(student.marks);
// });

//map method
// let  arr=[1,2,3,4,5];
// let double=arr.map((el)=>{
//     return el*2;
// });

// let arr=[{
//     name:"aman",
//     marks:95,
// },
// {
//     name:"shradha",
//     marks:85,  
// },
// {
//     name:"karan",
//     marks:65,
// }];
//  let gpa=arr.map((el=>{
//     return el.marks/10;
//  }))

//filter method
// let  arr=[1,2,3,4,5];
// let ans=arr.filter((el)=>{
//     return el%2==0;
// });

//every method and some method
//[2,4,6].every(el=>el%2==0);
// true
// [2,4,6,3].every(el=>el%2==0);
// false

//reduce method
// [2,4,6,3].reduce((res,el)=>el+res);
// 15//reduce value

// let arr=[1,4,7,8,5,9];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

//default parametere
// function sum(a,b=5){
//     return a+b;
// }

//spread
// let arr=[1,4,7,8,5,9];
// let newArr=[...arr];
// console.log(newArr);
// //eith array literals
// let odd=[1,3,5];
// let even=[2,4,6,8];
// let num=[...odd,...even];
// console.log(num);
//with object literals
// const data={
//     email:"drsking.0@gmail.com",
//     password:"abcd",
// };
// const dataCopy={...data,id:123}

//rest method
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("u gave us :",args[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments);
// }
// function sum(...args){
//     return args.reduce((sum,el)=>sum+el);
// }

// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }else{
//             return min;
//         }
//     });
//     console.log(msg);
// }

//destructuring
let name=["John","Doe","tony","drs"];
let [winer,runnerup,secondRunnerup]=name;






// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const cube=(n)=>{
//     return n*n*n;
// };

// const pow=(a,b)=>{
//     return a**b;
// };

// const hello=()=>{
//     console.log("hello");
// };

// const mul=(a,b)=> a*b; //implicit return

//set timeout
// console.log("hi there");
// setTimeout(()=>{
//     console.log("I am from the future!");
// },4000)

//set interval
// console.log("hello am here");
// let id=setInterval(()=>{
//     console.log("hello world");
// },2000)
// console.log(id);

//this with arrow function
const student={
    name:"John",
    age:35,
    prop:this, //global scope
    getName(){
        return this.name;
    },
    getMarks:()=>{
        return this.marks; //parents scope->window
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this)
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this)
        },2000);
    },
};
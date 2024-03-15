// let name="drs";

// let sum=function(a,b){
//     return a+b;
// }

// let hello=function(){
//     console.log("hello");
// }


// function multipleGreet(func,n){  //higher order function
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// let gret=function(){
//     console.log("hello");
// }
// multipleGreet(gret,10);



const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
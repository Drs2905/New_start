// function sum(a,b){
//     return a+b;
// }
// let s=sum(3,4);
// console.log(s);


// function sum(a,b){
//     return a+b;
// }
// let b=sum(sum(3,4),6);
// console.log(b);

// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }

//create a function that returns the concartenation of all string in an array

let str=[ "Hello", "how","are","you"];

function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;

}
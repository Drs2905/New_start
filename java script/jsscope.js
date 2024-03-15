//lexical scope
// function outerFunc(){
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }

//pqs7
let greet="hello";
function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();
// let fruit=["mango","orange","apple", "banana", "kiwi"];
// for(i=0;i<fruit.length;i++){
//     console.log(i+": "+fruit[i]);  
// }

//for nested loop
// let heros=[["ironman","spederman","thor"],["superman","batman", "wonder woman"]];
// for(let i=0;i<heros.length;i++){
//     console.log(i,heros[i]);
//     for (let j=0;j<heros[i].length;j++) {
//         console.log(`j=${j},${heros[i][j]}`); 
//     }
// }


//for of loop
// let heros=["ironman","spederman","thor"];
// for(i of heros){
//     console.log(i);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

//for of loop for nested loop
let heros=[["ironman","spederman","thor"],["superman","batman", "wonder woman"]];
for(list of heros){
    for(name of list){
        console.log(name);
    }
    
}
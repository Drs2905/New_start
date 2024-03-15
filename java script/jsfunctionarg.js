function printName(name,age){
console.log(`${name}'s age is ${age}.`);
}
printName("drs",23);

function sum(a,b){
    console.log(a+b)
}
sum(3,8);

function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(10,5,3);

function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
printTable(4);